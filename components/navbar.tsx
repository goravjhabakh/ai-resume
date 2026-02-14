"use client"

import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export const Navbar = () => {
  const { data: session } = authClient.useSession()
  const router = useRouter()

  const handleSignOut = async () => {
    authClient.signOut()
    router.refresh()
  }

  return (
    <nav className="border-b-2 bg-sidebar backdrop:blur-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={"/"}
            className="font-bold text-2xl flex items-center gap-2"
          >
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-primary">Resume</span>AI
          </Link>

          <div className="flex items-center gap-4">
            {session ?
              <>
                <Link href={"/dashboard"}>
                  <Button variant={"ghost"}>Dashboard</Button>
                </Link>
                <Button onClick={handleSignOut}>Logout</Button>
              </>
            : <>
                <Link href={"/sign-in"}>
                  <Button variant={"ghost"}>Login</Button>
                </Link>
                <Link href={"/sign-up"}>
                  <Button>Get Started</Button>
                </Link>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
