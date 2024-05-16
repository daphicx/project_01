import {Link} from "react-router-dom"
import  {useState} from 'react'


function Navbar() {
  const [isClicked, setIsClicked] = useState(false)
  
  return (

  <nav className='flex relative justify-between items-center px-5 py-3 shadow font-sans'>
  <h1 className='font-bold text-lg/6 text-gray-300'><Link to="/">Umbire</Link></h1>
  <ul className={`flex flex-col gap-10  items-center absolute bg-white shadow p-5 h-80 transition duration-150 ease-in-out w-screen inset-0  overflow-hidden  ${!isClicked ? 'hidden' :''} md:flex-row md:relative`}>
          <li className='text-gray-300 font-bold hover:text-blue-900'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-gray-300 font-bold hover:text-blue-900'>
          <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className='text-gray-300 font-bold hover:text-blue-900'>
            <Link to="/about">About</Link>
          </li>
          <li className='text-gray-300 font-bold hover:text-blue-900'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        
        <div className='flex items-center gap-3'>
         <button type='button' className=' px-4 py-2 bg-blue-900 font- font-bold text-white text-sm/6 rounded-lg focus:ring  hover:bg-blue-800' > Login </button>
        
        <p className={`bg-black text-white ${isClicked ? 'hidden' : ''}`} onClick={()=>{setIsClicked(true)}}>5</p>
        
        <p className={`bg-black text-white ${!isClicked ? 'hidden' : 'absolute right-5'}`} onClick={()=>{setIsClicked(false)}}>x</p>

        </div>
        
         </nav>
  
  )
}

export default Navbar;