import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    const subtotal = cart.reduce(
        (acc, current) => acc + current.price * current.qnt,
        0
    );

    return (
        <div className="border rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900">Carrello</h2>

            {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Carrello vuoto</p>
            ) : (
                <>
                    <ul className="space-y-4 mb-6">
                        {cart.map(item => (
                            <li key={item.id} className="flex py-4">
                                <div className="flex flex-1 flex-col">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <span className="text-sm font-semibold">{item.title}</span>
                                        <div className="flex">
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveFromCart(item.id)}
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Rimuovi
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm text-gray-500">
                                        <span>Qty: {item.qnt}</span>
                                        <span>${(item.price * item.qnt).toFixed(2)}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <span>Totale: </span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
