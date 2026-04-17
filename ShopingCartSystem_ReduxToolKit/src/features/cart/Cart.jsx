import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { increaseItem, removeToCart } from './cartSlice';

const Cart = () => {
    const { cartItems, totalQuantity, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">

                <h2 className="text-2xl font-bold mb-4 text-gray-800">🛒 Your Cart</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">

                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Title</th>
                                <th className="py-3 px-4 text-center">Quantity</th>
                                <th className="py-3 px-4 text-center">Price</th>
                                <th className="py-3 px-4 text-center">Total</th>
                                <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-gray-50 transition duration-200"
                                    >
                                        <td className="py-3 px-4">{item.title}</td>
                                        <td className="py-3 px-4 text-center">
                                            <button className='font-bold text-2xl gap-2' onClick={() => dispatch(increaseItem(item.id))}>+</button>
                                            {item.quantity}

                                        </td>
                                        <td className="py-3 px-4 text-center">${item.price}</td>
                                        <td className="py-3 px-4 text-center font-semibold text-green-600">
                                            ${item.quantity * item.price}
                                        </td>
                                        <td className='flex justify-center items-center text-center mt-4'>
                                            <button className='flex justify-center items-center text-center gap-2 cursor-pointer' onClick={() => dispatch(removeToCart(item.id))}> <span className='text-red-500'><FaTrash /></span> Remove</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-500">
                                        Your cart is empty 🛒
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Summary Section */}
                <div className="mt-6 flex justify-between items-center border-t pt-4">
                    <p className="text-lg font-medium">
                        Total Items: <span className="font-bold">{totalQuantity}</span>
                    </p>
                    <p className="text-lg font-medium">
                        Total Price:
                        <span className="font-bold text-green-600 ml-2">
                            ${parseFloat(totalPrice.toFixed(2))}
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Cart