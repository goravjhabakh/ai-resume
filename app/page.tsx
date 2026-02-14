import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  MousePointerClick,
  Upload,
  Sparkles,
  Brain
} from "lucide-react"
import { FeatureCard } from "@/components/feature-card"

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center space-y-10 py-20 md:py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.4] mask-[radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <Badge className="px-4 py-2 text-sm rounded-full variant-secondary animate-in fade-in zoom-in duration-500">
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Resume Analysis
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl animate-in slide-in-from-bottom-4 duration-700">
          Is your resume{" "}
          <span className="text-primary relative">ATS-proof?</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-in slide-in-from-bottom-8 duration-700 delay-100">
          Stop sending resumes into the void. Get instant AI feedback, keyword
          optimization, and match your resume to any job description in seconds.
        </p>
        <div className="flex gap-4 animate-in slide-in-from-bottom-12 duration-700 delay-200">
          <Link href={"/dashboard"}>
            <Button
              size={"lg"}
              className="h-14 px-8 text-lg rounded-full gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              Check My Score <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href={"#how-it-works"}>
            <Button
              variant="outline"
              size={"lg"}
              className="h-14 px-8 text-lg rounded-full"
            >
              How It works
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="pt-16 animate-in fade-in duration-1000 delay-500">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by job seekers from top companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold">GOOGLE</span>
            <span className="text-xl font-bold">AMAZON</span>
            <span className="text-xl font-bold">MICROSOFT</span>
            <span className="text-xl font-bold">META</span>
            <span className="text-xl font-bold">NETFLIX</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to land your dream job, powered by advanced AI
              models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-primary" />}
              title="Smart Analysis"
              description="Get a detailed score breakdown of your resume based on format, keywords, and impact."
            />
            <FeatureCard
              icon={<MousePointerClick className="w-10 h-10 text-primary" />}
              title="Job Matching"
              description="Paste a job description and see exactly how well your resume matches the requirements."
            />
            <FeatureCard
              icon={<FileText className="w-10 h-10 text-primary" />}
              title="Keyword Optimization"
              description="Identify missing keywords that Applicant Tracking Systems (ATS) are looking for."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-10 h-10 text-primary" />}
              title="Actionable Feedback"
              description="Don't just get a score. Get specific, actionable advice on how to improve each section."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10 text-primary" />}
              title="Industry Standards"
              description="Benchmarks against successful resumes in your specific industry and role."
            />
            <FeatureCard
              icon={<Upload className="w-10 h-10 text-primary" />}
              title="Instant PDF Parsing"
              description="Upload your existing PDF resume and get analysis in seconds. No re-typing required."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to a better resume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-[24px] left-[20%] right-[20%] h-[2px] bg-muted-foreground/30 -z-10"></div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl relative z-10 shadow-lg ring-4 ring-background">
                1
              </div>
              <h3 className="text-xl font-bold">Upload Your Resume</h3>
              <p className="text-muted-foreground max-w-xs">
                Simply upload your current resume in PDF format. We&apos;ll
                parse it instantly.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl relative z-10 shadow-lg ring-4 ring-background">
                2
              </div>
              <h3 className="text-xl font-bold">Add Job Description</h3>
              <p className="text-muted-foreground max-w-xs">
                Paste the job description you&apos;re applying for to get a
                targeted match score.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl relative z-10 shadow-lg ring-4 ring-background">
                3
              </div>
              <h3 className="text-xl font-bold">Get Results & Optimize</h3>
              <p className="text-muted-foreground max-w-xs">
                Review your score, see missing keywords, and follow our
                suggestions to improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Start for free, upgrade for unlimited analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="flex flex-col hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>
                  Perfect for trying out the analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-6">
                  $0
                  <span className="text-lg font-normal text-muted-foreground">
                    /mo
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>3 Resume Scans / month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Basic Feedback</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 opacity-50" />
                    <span>PDF Download</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/sign-up">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="flex flex-col border-primary relative overflow-hidden shadow-md hover:shadow-xl transition-all scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>For serious job seekers.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-6">
                  $9
                  <span className="text-lg font-normal text-muted-foreground">
                    /mo
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Unlimited Scans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Advanced AI Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Keyword Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Job Description Matching</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/sign-up">
                  <Button className="w-full">Upgrade to Pro</Button>
                </Link>
              </div>
            </Card>

            <Card className="flex flex-col hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Lifetime</CardTitle>
                <CardDescription>One-time payment.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-6">
                  $49
                  <span className="text-lg font-normal text-muted-foreground">
                    /once
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Lifetime Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Priority Support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/sign-up">
                  <Button variant="outline" className="w-full">
                    Get Lifetime
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%] animate-shine opacity-10" />
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to land more interviews?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of job seekers who found success with our
                AI-powered resume tool.
              </p>
              <Link href={"/dashboard"}>
                <Button
                  size={"lg"}
                  variant="secondary"
                  className="h-14 px-8 text-lg rounded-full font-bold shadow-2xl"
                >
                  Get Started for Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-muted/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            AI Resume
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Resume Analyser. All rights
            reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Home
