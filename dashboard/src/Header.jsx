import { Menu } from 'lucide-react'

const Header = ({setSidebarOpen}) => {
  return (
    <>
    <header className='bg-white p-3 flex justify-between items-center shadow relative z-20'>

            <div className="icon lg:hidden">
              <Menu
                className='cursor-pointer'
                onClick={() => setSidebarOpen(true)}
              />
            </div>

            <div>
              <h3 className='text-2xl font-bold'>Dashboard</h3>
            </div>

            <div className='w-10 h-10 bg-gray-300 rounded-full'></div>

          </header>
    </>
  )
}

export default Header