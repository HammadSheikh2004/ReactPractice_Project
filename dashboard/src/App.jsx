import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
import Header from './Header'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <div className="flex bg-gray-100 h-screen">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Main Content */}
        <main className='flex-1'>
          {/* Header */}
          <Header setSidebarOpen={setSidebarOpen} />
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className='font-bold text-lg'>Card</h3>
              <p>This is a sample card with dashboard.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className='font-bold text-lg'>Card</h3>
              <p>This is a sample card with dashboard.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className='font-bold text-lg'>Card</h3>
              <p>This is a sample card with dashboard.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className='font-bold text-lg'>Card</h3>
              <p>This is a sample card with dashboard.</p>
            </div>

          </div>

        </main>

      </div>
    </>
  )
}

export default App