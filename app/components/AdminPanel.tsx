import JobListingsManagement from './admin/JobListingsManagement'
import CVScreeningDashboard from './admin/CVScreeningDashboard'
import SocialMediaPostScheduler from './admin/SocialMediaPostScheduler'
import CandidateAssessmentGenerator from './admin/CandidateAssessmentGenerator'

export default function AdminPanel() {
  return (
    <section id="admin" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Admin Panel</h2>
      <div className="space-y-8">
        <JobListingsManagement />
        <CVScreeningDashboard />
        <SocialMediaPostScheduler />
        <CandidateAssessmentGenerator />
      </div>
    </section>
  )
}
