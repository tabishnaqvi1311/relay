import Link from 'next/link'
import '@/styles/globals.css'
const Navbar = () => {
    return (
        <nav className='bg-white text-black'>
            <ul>
                <li>RELAY</li>
                <li>About</li>
                <li>Chat</li>
            </ul>
            <ul>
                <button>Signup</button>
                <button>Login</button>
            </ul>
        </nav>
    )
}

export default Navbar;