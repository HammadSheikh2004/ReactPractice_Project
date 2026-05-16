import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { useSelector } from 'react-redux';

const Header = () => {
    const { totalQuantity } = useSelector(state => state.cart);
    return (
        <>
            <header className='bg-white w-full'>
                <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                    <Link to='/' className='logo text-2xl font-bold'>
                        Cart System
                    </Link>
                    <div className='links'>
                        <Link to='/auth' className='mr-4 bg-gray-200 p-2 rounded hover:bg-gray-300 hover:cursor-pointer transition delay-100 ease-in'>Registration</Link>
                        <Link to='/cart' className='relative text-xl font-bold'>
                            🛒
                            <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full py-1'>
                                {totalQuantity}
                            </span>
                        </Link>
                    </div>
                </div>


            </header>
        </>
    )
}

export default Header