import JobListingsPage from './client/JobListingsPage'
import ApplicationForm from './client/ApplicationForm'
import CompanyBranding from './client/CompanyBranding'

export default function ClientPanel() {
  return (
    <section id="client" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Client Panel</h2>
      <div className="space-y-8">
        <JobListingsPage />
        <ApplicationForm />
        <CompanyBranding />
      </div>
    </section>
  )
}
