import { useEffect, useState } from 'react'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        const products = data.products.map(products => ({
          id: products.id,
          title: products.title,
          price: products.price,
          thumbnail: products.thumbnail
        }));
        setProducts(products);
      } catch (error) {
        console.error('Errore', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const productInCart = prevCart.find(item => item.id === product.id);
      if (productInCart) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, qnt: item.qnt + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qnt: 1 }];
      }
    })
  }

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="flex gap-[40px]">
          <div className="flex-grow">
            <ProductList products={products} handleAddToCart={handleAddToCart} />
          </div>
          <div className="w-[250px]">
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>
      </div>
    </>
  )



}

export default App
