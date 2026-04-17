import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { useDispatch } from 'react-redux'
import Cards from './Cards'
import { addToCart } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => { setData(data.products) });
    }, [])

    const dispatch = useDispatch();
    return (
        <>
            <div className='bg-gray-300 w-full min-h-screen p-4'>
                <div className="text-center">
                    <Heading heading="Cart System" />
                </div>
                <Link to='/features/cart'>Cart</Link>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 mt-4'>
                    {
                        data && data.map((pro) => {
                            return (
                                <div key={pro.id}>
                                    <Cards title={pro.title} des={pro.description} img={pro.images} func={() => dispatch(addToCart(pro))} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home