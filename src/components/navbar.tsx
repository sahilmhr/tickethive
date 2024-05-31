import Link from "next/link";
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu";
import { SignInButton } from "./sign-in-button";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Navbar() {

    const session = await getServerSession(options);

    return (
    <nav className="flex h-16 w-full items-center justify-between bg-gray-900 px-8 md:px-8">
        <Link className="flex items-center gap-2" href="#">
            <span className="text-lg font-semibold text-gray-50">Ticket Hive</span>
        </Link>
        <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
                <NavigationMenuLink asChild>
                    <Link className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50" href="#">Home</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                    <Link className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50" href="#">About</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                    <Link className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50" href="#">Contact</Link>
                </NavigationMenuLink>
            </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
            {session?.user ? <span>Dashboard</span> : <SignInButton/>}    
        </div>
    </nav>
  )
}