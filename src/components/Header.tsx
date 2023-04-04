import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-red-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} passHref>
          
            <span className="ml-3 text-xl text-white">My Blog</span>
          
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white hover:text-gray-900">Profile</a>
        </nav>
      </div>
    </header>
  )
}