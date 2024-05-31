import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p>© {(new Date()).getFullYear()} TicketHive Inc.</p>
        </div>
        <div>
          <Link className="hover:text-gray-100 transition-colors" href="#">
            TicketHive Inc.
          </Link>
        </div>
        <div>
          <Link className="hover:text-gray-100 transition-colors" href="#">
            Contact Us
          </Link>
        </div>
        <div>
          <Link className="hover:text-gray-100 transition-colors" href="#">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}