import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card"

export const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/50 hover:bg-background">
      <CardHeader>
        <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
