import { Star, Users } from 'lucide-react'

export default function CompanyBranding() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Company Culture</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold mb-2 flex items-center">
            <Star className="mr-2 text-yellow-500" size={20} />
            Our Achievements
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Ranked #1 in Employee Satisfaction</li>
            <li>Forbes Top 100 Companies to Work For</li>
            <li>Industry Leader in Innovation</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold mb-2 flex items-center">
            <Users className="mr-2 text-blue-500" size={20} />
            Employee Testimonials
          </h4>
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
    </div>
  )
}

