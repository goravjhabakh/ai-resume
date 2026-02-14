"use client"

import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

export const Navbar = () => {
  const { data: session } = authClient.useSession()
  const router = useRouter()

  const handleSignOut = async () => {
    await authClient.signOut()
    router.refresh()
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-10">
                  <Link
                    href="#features"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Features
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="text-lg font-medium hover:text-primary"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Pricing
                  </Link>

                  <div className="flex flex-col gap-3 mt-4">
                    {session ?
                      <>
                        <Link href={"/dashboard"}>
                          <Button className="w-full" variant={"ghost"}>
                            Dashboard
                          </Button>
                        </Link>
                        <Button className="w-full" onClick={handleSignOut}>
                          Logout
                        </Button>
                      </>
                    : <>
                        <Link href={"/sign-in"}>
                          <Button className="w-full" variant={"ghost"}>
                            Login
                          </Button>
                        </Link>
                        <Link href={"/sign-up"}>
                          <Button className="w-full">Get Started</Button>
                        </Link>
                      </>
                    }
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
