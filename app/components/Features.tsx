import { CheckCircle, Clock, Zap, BarChart } from "lucide-react"

const features = [
  {
    name: "Automated Workflows",
    description: "Set up custom workflows to automate repetitive tasks and save time.",
    icon: Zap,
  },
  {
    name: "Real-time Analytics",
    description: "Get insights into your business performance with our powerful analytics tools.",
    icon: BarChart,
  },
  {
    name: "Team Collaboration",
    description: "Easily collaborate with your team members in real-time.",
    icon: CheckCircle,
  },
  {
    name: "Time Tracking",
    description: "Track time spent on tasks and projects to improve productivity.",
    icon: Clock,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            StreamLine offers a comprehensive set of features to help you streamline your workflow and boost
            productivity.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

