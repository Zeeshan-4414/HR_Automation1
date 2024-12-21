import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">HR Portal</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#admin" className="hover:underline">Admin</Link></li>
            <li><Link href="#client" className="hover:underline">Client</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

