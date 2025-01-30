import { CheckCircle } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    href: "#",
    priceMonthly: 29,
    description: "All the basics for starting a new business",
    includedFeatures: ["Automated workflows", "Basic analytics", "5 team members", "1GB storage"],
  },
  {
    name: "Growth",
    href: "#",
    priceMonthly: 99,
    description: "Everything you need for a growing business",
    includedFeatures: [
      "Advanced workflows",
      "Real-time analytics",
      "Unlimited team members",
      "10GB storage",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    href: "#",
    priceMonthly: 249,
    description: "Advanced features for scaling your business",
    includedFeatures: [
      "Custom workflows",
      "Advanced analytics with AI insights",
      "Unlimited team members",
      "Unlimited storage",
      "24/7 dedicated support",
      "API access",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="bg-gray-100" id="pricing">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Plans for teams of all sizes
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose an affordable plan that's packed with the best features for your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{tier.name}</h3>
                  <p className="mt-6 text-base text-gray-500">{tier.description}</p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                    >
                      {tier.includedFeatures.map((feature) => (
                        <li key={feature} className="flex items-start lg:col-span-1">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                        Price
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <p className="mt-8">
                      <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{" "}
                      <span className="text-base font-medium text-gray-500">/month</span>
                    </p>
                    <a
                      href={tier.href}
                      className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                    >
                      Get started with {tier.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

