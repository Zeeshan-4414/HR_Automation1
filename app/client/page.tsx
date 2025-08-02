export default function ClientDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Welcome to the Client Portal
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Explore job opportunities and learn more about our company using the navigation bar above.
      </p>
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get Started</h2>
        <p className="text-gray-600 mb-4">
          Browse through the job listings, apply for positions that suit you, and get to know more about the company. 
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-green-600">&#10003;</span>
            <span className="text-gray-600">Browse job listings to find your next opportunity.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-600">&#10003;</span>
            <span className="text-gray-600">Apply directly through the portal with your resume.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-600">&#10003;</span>
            <span className="text-gray-600">Learn more about our company culture and values.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
