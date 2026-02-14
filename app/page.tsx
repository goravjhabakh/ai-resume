import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <h1 className="font-bold text-4xl">AI Resume Analyser</h1>
      <Button size={"lg"} className="font-semibold">
        Get Started
      </Button>
    </div>
  )
}
export default Home
