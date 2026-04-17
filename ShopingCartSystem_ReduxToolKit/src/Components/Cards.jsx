import React from 'react'

const Cards = ({ img, des, title, func }) => {
    return (
        <>
            <div className="card w-60 border border-gray-950 rounded-tr-xl rounded-tl-xl">
                <img src={img} className='rounded-tr-xl rounded-tl-xl' alt="" />
                <div className="card-body bg-white p-3">
                    <div className="card-title my-2">
                        <h3 className='text-xl font-medium text-gray-800 truncate w-55'>{title}</h3>
                    </div>
                    <div className="card-description my-2">
                        <p className='text-gray-800 truncate w-55'>{des}</p>
                    </div>
                    <div className="card-button mb-2 pt-2">
                        <button onClick={func} className='bg-gray-500 hover:bg-gray-600 cursor-pointer rounded-md border border-gray-500 p-2 text-white transition delay-75 ease-in'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards