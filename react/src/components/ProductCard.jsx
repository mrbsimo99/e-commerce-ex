import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {

    return (
        <>
            <div className="border rounded-xl p-4 flex flex-col h-full mb-4">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-bold">${product.price}</span>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </>

    );

}

export default ProductCard;