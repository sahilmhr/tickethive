import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TrendingEvents() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
            Trending Events
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Discover the latest and greatest events in your area.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Event</span>
            </Link>
            <img
              alt="Event Image"
              className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="bg-white dark:bg-gray-900 p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Music Festival</h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">June 15, 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">7:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Central Park</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">Free</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Free</span>
                </div>
                <Button size="sm">Book Now</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Event</span>
            </Link>
            <img
              alt="Event Image"
              className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="bg-white dark:bg-gray-900 p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Art Exhibition</h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">July 1, 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">10:00 AM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Gallery District</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="rounded-full bg-gray-500 px-2 py-1 text-xs font-medium text-white">$20</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">$20</span>
                </div>
                <Button size="sm">Book Now</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Event</span>
            </Link>
            <img
              alt="Event Image"
              className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="bg-white dark:bg-gray-900 p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Comedy Show</h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">August 12, 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">8:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Comedy Club</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="rounded-full bg-gray-500 px-2 py-1 text-xs font-medium text-white">$15</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">$15</span>
                </div>
                <Button size="sm">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LocateIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}