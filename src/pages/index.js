import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className='text-red-500'>hello</div>
      </main>
    </>
  )
}
