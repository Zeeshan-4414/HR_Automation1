import { Star, Users } from 'lucide-react'

export default function CompanyInfo() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Company Information</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Star className="mr-2 text-yellow-500" size={24} />
            Our Achievements
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ranked #1 in Employee Satisfaction</li>
            <li>Forbes Top 100 Companies to Work For</li>
            <li>Industry Leader in Innovation</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 text-green-500" size={24} />
            Employee Testimonials
          </h2>
          <div className="space-y-4">
            <blockquote className="italic">
              "Working here has been an incredible journey. The supportive environment and opportunities for growth are unmatched."
              <footer className="text-right mt-1">- Jane Doe, Software Engineer</footer>
            </blockquote>
            <blockquote className="italic">
              "I've never felt more valued as an employee. This company truly cares about its people and their development."
              <footer className="text-right mt-1">- John Smith, Marketing Specialist</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">About Our Company</h2>
        <p className="mb-4">
          We are a leading technology company specializing in innovative solutions for businesses worldwide. 
          Our mission is to empower organizations through cutting-edge software and data-driven insights.
        </p>
        <p>
          Founded in 2010, we have grown from a small startup to a global enterprise, 
          serving clients across various industries including finance, healthcare, and e-commerce.
        </p>
      </div>
    </div>
  )
}

