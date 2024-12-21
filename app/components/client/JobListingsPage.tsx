import { Briefcase } from 'lucide-react'

export default function JobListingsPage() {
  const jobs = [
    {
      id: 1,
      title: 'Software Developer',
      description: 'We are seeking a talented Software Developer to join our dynamic team...',
      qualifications: 'Bachelor\'s degree in Computer Science or related field, 3+ years of experience in web development'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      description: 'We are looking for an experienced Marketing Manager to lead our marketing efforts...',
      qualifications: 'MBA in Marketing, 5+ years of experience in digital marketing, strong leadership skills'
    }
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Job Listings</h3>
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-gray-100 p-4 rounded">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <Briefcase className="mr-2 text-blue-500" size={20} />
              {job.title}
            </h4>
            <p className="mb-2">{job.description}</p>
            <p className="mb-4"><strong>Qualifications:</strong> {job.qualifications}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

