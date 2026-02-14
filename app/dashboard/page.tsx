import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/sign-in")
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-lg">Welcome to your dashboard</p>
    </div>
  )
}
export default Page
