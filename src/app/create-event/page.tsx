
import { Button } from "@/components/ui/button"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/components/ui/tooltip"

export default function Component() {
  return (
    <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Create Event</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Fill out the form to create a new event.</p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="event-name">
                Event Name
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-500 py-2 px-3"
                  id="event-name"
                  name="event-name"
                  placeholder="Enter event name"
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="event-image">
                Event Image
              </label>
              <div className="mt-1 flex items-center">
                <div className="relative w-full">
                  <input
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-500 py-2 px-3"
                    id="event-image"
                    name="event-image"
                    type="file"
                  />
                  <Button
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    type="button"
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="event-description">
              Description
            </label>
            <div className="mt-1">
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-500 py-2 px-3"
                id="event-description"
                name="event-description"
                placeholder="Enter event details"
                required
                rows={3}
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span id="event-description-length">0</span>
                /500 characters{"\n                      "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="event-date">
                Date & Time
              </label>
              <div className="mt-1 flex items-center">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-500 py-2 px-3"
                    id="event-date"
                    name="event-date"
                    required
                    type="date"
                  />
                </div>
                <div className="ml-4">
                  <input
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-500 py-2 px-3"
                    id="event-time"
                    name="event-time"
                    required
                    type="time"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="event-location">
                Location
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-500 py-2 px-3"
                  id="event-location"
                  name="event-location"
                  placeholder="Enter event location"
                  required
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="event-price">
                Ticket Price (Optional)
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-500 py-2 px-3"
                  id="event-price"
                  name="event-price"
                  placeholder="Enter ticket price"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button className="w-full sm:w-auto" type="submit">
              Create Event
            </Button>
            <div className="flex items-center gap-2 ml-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="w-full sm:w-auto" variant="outline">
                      <LockIcon className="w-4 h-4 mr-2" />
                      Make Private
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Once the event is kept private, it won&apos;t be shown in the main feed.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button className="w-full sm:w-auto" variant="outline">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Event Preview</h2>
        <div className="mt-6 space-y-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 relative">
              <img
                alt="Event Image"
                className="rounded-lg object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <Button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                type="button"
              >
                Edit
              </Button>
            </div>
            <div className="ml-6 space-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Event Name</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Event details go here. This is a preview of the event details that the user will see.
              </p>
              <p className="text-gray-500 dark:text-gray-400">Date & Time: April 15, 2023 at 7:00 PM</p>
              <p className="text-gray-500 dark:text-gray-400">Location: Online</p>
              <p className="text-gray-500 dark:text-gray-400">Ticket Price: $10.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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


function LockIcon(props : any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function ShareIcon(props : any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}