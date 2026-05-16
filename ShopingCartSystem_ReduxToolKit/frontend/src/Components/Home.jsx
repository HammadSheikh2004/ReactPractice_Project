import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { useDispatch, useSelector } from 'react-redux'
import Cards from './Cards'
import { addToCart, clearFilter, filteredCategory, setPage } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const productsData = () => {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => { setData(data.products) });
        }
        const categoryData = () => {
            fetch('https://dummyjson.com/products/categories')
                .then(res => res.json())
                .then(data => setCategory(data));
        }
        productsData();
        categoryData();
    }, [])

    const dispatch = useDispatch();
    const { loading, filteredCat, activeCategory, currentPage, itemsPerPage } = useSelector(state => state.cart);
    const displayedData = filteredCat.length > 0 ? filteredCat : data;
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = displayedData.slice(start, start + itemsPerPage);
    const totalPages = Math.ceil(displayedData.length / itemsPerPage);
    const pages = [...Array(totalPages).keys()].map(i => i + 1);
    return (
        <>
            <div className='bg-gray-200 w-full min-h-screen overflow-x-hidden'>
                <Header />
                <div className="max-w-7xl mx-auto px-4 p-4">
                    <div className="text-start">
                        <Heading heading="Products" />
                    </div>

                    <div className="category flex gap-3 overflow-x-auto py-2 my-2">
                        <button
                            className={`px-4 py-2 rounded-lg whitespace-nowrap hover:cursor-pointer capitalize ${activeCategory === null
                                ? 'bg-gray-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                            onClick={() => dispatch(clearFilter())}>All</button>
                        {
                            category && category.map((cat, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        className={`px-4 py-2 rounded-lg whitespace-nowrap hover:cursor-pointer capitalize ${activeCategory === cat.slug ? 'bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300'} `} onClick={() => dispatch(filteredCategory(cat.slug))}>
                                        {cat.slug}
                                    </button>
                                )
                            })
                        }
                    </div>
                    {
                        loading && loading ?
                            (
                                <p>Loading...</p>
                            ) :
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 mt-4'>
                                {
                                    paginated && paginated.map((pro) => {
                                        return (
                                            <div key={pro.id}>
                                                <Cards title={pro.title} des={pro.description} img={pro.images[0]} func={() => dispatch(addToCart(pro))} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }
                    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">

                        <button
                            disabled={currentPage === 1}
                            onClick={() => dispatch(setPage(currentPage - 1))}
                            className={`px-3 py-1 rounded-md border 
                                ${currentPage === 1
                                    ? "bg-gray-200 cursor-not-allowed"
                                    : "bg-white hover:bg-gray-100"}`}>
                            Prev
                        </button>
                        {
                            pages.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => dispatch(setPage(page))}
                                    className={`px-3 py-1 rounded-md border 
                                        ${currentPage === page
                                            ? "bg-gray-600 text-white"
                                            : "bg-white hover:bg-gray-100"}`}>
                                    {page}
                                </button>
                            ))
                        }

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => dispatch(setPage(currentPage + 1))}
                            className={`px-3 py-1 rounded-md border  
                                ${currentPage === totalPages
                                    ? "bg-gray-200 cursor-not-allowed"
                                    : "bg-white hover:bg-gray-100"}`}>
                            Next
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Home