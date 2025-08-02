import React from 'react';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import { AiOutlineRobot } from 'react-icons/ai';
import Image from 'next/image';

const featuredJobs = [
  {
    id: 1,
    title: 'Software Developer',
    description: 'Join our dynamic team of developers working on cutting-edge web applications.',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    description: 'Lead our marketing efforts and drive growth for our innovative products.',
  },
  {
    id: 3,
    title: 'Data Analyst',
    description: 'Help us make data-driven decisions by analyzing complex datasets.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="HR Automation Portal Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <div className="text-2xl font-extrabold text-gray-800">HR Automation Portal</div>
          </div>
          <div>
            <Link href="/login" className="text-blue-600 hover:text-blue-800 mr-6">
              Login
            </Link>
            <Link
              href="/login?redirect=/client/job-listings"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View All Jobs
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* Welcome Section */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Welcome to Our Portal
        </h1>

        {/* Featured Jobs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Job Openings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="mr-3 text-blue-500" size={24} />
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <Link
                  href={`/login?redirect=/client/apply&job=${job.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="mb-16 bg-white rounded-lg shadow-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-md text-gray-700 leading-relaxed text-center">
                To become a global leader in HR innovation by delivering advanced, AI-driven solutions that simplify and enhance workforce management. We aim to foster organizational growth by empowering businesses and employees to thrive in a collaborative, efficient, and inclusive environment.
              </p>
            </div>

            <div className="w-1/4 mx-auto border-t-2 border-blue-200 my-12"></div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-md text-gray-700 leading-relaxed">
               To revolutionize HR processes through cutting-edge technology, enabling organizations to optimize talent acquisition, improve workforce management, and enhance employee engagement. By leveraging AI, we strive to minimize manual workloads, facilitate data-driven decisions, and build a workplace culture focused on growth, innovation, and employee satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* AI-Powered Solutions Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Our AI-Powered Solutions?
          </h2>
          <div className="flex justify-center flex-wrap gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all w-72">
              <AiOutlineRobot className="text-blue-500 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Candidate Assessment</h3>
              <p className="text-gray-600">
                Leverage AI to generate comprehensive assessments tailored to specific job roles and required skills.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all w-72">
              <Briefcase className="text-indigo-500 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Matching & Shortlisting</h3>
              <p className="text-gray-600">
                Utilize AI-driven algorithms to ensure precise candidate-job fit and efficient shortlisting processes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all w-72">
              <AiOutlineRobot className="text-green-500 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Media Automation</h3>
              <p className="text-gray-600">
                Automate job postings across multiple platforms to maximize visibility and attract top talent efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Work With Us?</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Join our innovative team and be part of a company that values growth, creativity, and work-life balance.
            We offer competitive salaries, excellent benefits, and opportunities for professional development.
            Our AI-powered tools streamline the hiring process and make it easier to find top talent.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white text-center py-4 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="font-bold">Copyright &copy; 2024 <strong className="text-blue-700"> HR Automation</strong>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

