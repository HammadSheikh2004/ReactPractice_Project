import React from 'react'
import { Calendar, Home, LayoutDashboard, Menu, Projector } from 'lucide-react'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const navItem = [
        { name: "Home", icon: <Home /> },
        { name: "Dashboard", icon: <LayoutDashboard /> },
        { name: "Project", icon: <Projector /> },
        { name: "Calendar", icon: <Calendar /> },
    ]
    return (
        <>
            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            <div className={`w-64 bg-white h-screen fixed shadow z-40 
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
            lg:translate-x-0 lg:static`}>

                <div className='flex p-4 justify-between items-center border-b'>
                    <div className="logo text-2xl font-bold">
                        Logo
                    </div>

                    <button
                        className='text-xl font-bold lg:hidden'
                        onClick={() => setSidebarOpen(false)}
                    >
                        X
                    </button>
                </div>

                <div className="navigation p-4 space-y-4 flex flex-col">
                    {navItem.map((item, idx) => (
                        <div
                            key={idx}
                            className='flex justify-between items-center p-2 hover:bg-gray-200 rounded cursor-pointer'
                        >
                            <a href={item.name}>{item.name}</a>
                            <div className='text-[22px]'>{item.icon}</div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Sidebar