import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SignInButton(){
    return (
        <Button className="border-gray-50" variant="outline">
            <Link href="/api/auth/signin">
                Sign In
            </Link>
        </Button>
    )
}