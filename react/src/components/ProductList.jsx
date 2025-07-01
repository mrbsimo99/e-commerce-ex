import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, handleAddToCart }) => {

    const displayedProducts = products.slice(0, 30);

    return (
        <>
            <div className="flex flex-wrap gap-[2%]">
                {displayedProducts.map(product => (
                    <div
                        key={product.id}
                        className="w-[calc(33%-2%)]"
                    >
                        <ProductCard product={product} handleAddToCart={handleAddToCart} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;