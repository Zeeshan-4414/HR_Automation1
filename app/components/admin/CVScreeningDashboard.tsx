import { FileText, Eye } from 'lucide-react'

export default function CVScreeningDashboard() {
  const candidates = [
    { id: 1, name: 'John Doe', score: 85 },
    { id: 2, name: 'Jane Smith', score: 92 },
    { id: 3, name: 'Bob Johnson', score: 78 }
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">CV Screening Dashboard</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Candidate</th>
              <th className="px-4 py-2 text-left">Relevance Score</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="border-b">
                <td className="px-4 py-2 flex items-center">
                  <FileText className="mr-2 text-blue-500" size={20} />
                  {candidate.name}
                </td>
                <td className="px-4 py-2">{candidate.score}%</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors flex items-center">
                    <Eye className="mr-1" size={16} /> View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
