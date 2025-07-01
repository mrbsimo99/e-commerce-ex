import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, handleAddToCart }) => {

    return (
        <>
            <div className="flex flex-wrap gap-[2%]">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="w-[calc(33%-2%)] mb-6"
                    >
                        <ProductCard product={product} handleAddToCart={handleAddToCart} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;