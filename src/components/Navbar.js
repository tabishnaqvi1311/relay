import Link from 'next/link'
import { navItems } from '@/constants/constant';

const Navbar = () => {
    return (
        <nav className='bg-white text-black flex flex-row justify-between items-center'>
            <ul className='flex flex-row items-center'>
                {navItems.map((item) => (
                    <li className={`p-4 mx-2 ${item.size === '2xl'?'text-2xl':'text-lg'}`}>{item.content}</li>
                ))}
            </ul>
            <ul>
                <button className='border border-black px-4 py-2 rounded-full mx-6 bg-violet-400 text-white'>Signup</button>
                <button className='border px-4 py-2 rounded-full mx-2'>Login</button>
            </ul>
        </nav>
    )
}

export default Navbar;