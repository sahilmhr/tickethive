import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <CalendarIcon className="h-6 w-6" />
              <span className="">Event Booking</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CalendarCheckIcon className="h-4 w-4" />
                My Attended Events
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CalendarPlusIcon className="h-4 w-4" />
                My Created Events
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CalendarIcon className="h-4 w-4" />
                All Events
              </Link>
              <Button
                className="mt-4 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                size="sm"
                variant="outline"
              >
                <CalendarPlusIcon className="h-4 w-4" />
                Create Event
              </Button>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <CalendarIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Dashboard</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Tech Conference 2023</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">May 15, 2023 - May 17, 2023</div>
                    </div>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Upcoming
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Music Festival</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">June 1, 2023 - June 3, 2023</div>
                    </div>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Upcoming
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Art Exhibit</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">July 1, 2023 - July 31, 2023</div>
                    </div>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Upcoming
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Total Attendees</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">2,345</div>
                    </div>
                    <UsersIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Ticket Sales</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">$125,000</div>
                    </div>
                    <DollarSignIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Upcoming Events</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">15</div>
                    </div>
                    <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date/Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Tech Conference 2023</TableCell>
                  <TableCell>May 15, 2023 - May 17, 2023</TableCell>
                  <TableCell>San Francisco, CA</TableCell>
                  <TableCell>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Music Festival</TableCell>
                  <TableCell>June 1, 2023 - June 3, 2023</TableCell>
                  <TableCell>New York City, NY</TableCell>
                  <TableCell>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Art Exhibit</TableCell>
                  <TableCell>July 1, 2023 - July 31, 2023</TableCell>
                  <TableCell>Chicago, IL</TableCell>
                  <TableCell>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Summer Gala</TableCell>
                  <TableCell>August 15, 2023</TableCell>
                  <TableCell>Los Angeles, CA</TableCell>
                  <TableCell>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Live
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Holiday Party</TableCell>
                  <TableCell>December 10, 2022</TableCell>
                  <TableCell>Seattle, WA</TableCell>
                  <TableCell>
                    <Badge className="rounded-full px-2 py-1 text-xs" variant="outline">
                      Past
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}

function CalendarCheckIcon(props : any) {
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
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}


function CalendarIcon(props :any) {
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


function CalendarPlusIcon(props :any) {
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
      <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
      <path d="M3 10h18" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </svg>
  )
}


function DollarSignIcon(props : any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function UsersIcon(props : any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}