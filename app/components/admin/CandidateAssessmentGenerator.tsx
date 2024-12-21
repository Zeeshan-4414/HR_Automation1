'use client'

import { useState } from 'react'
import { Zap, Edit2, Trash2, Save } from 'lucide-react'

export default function CandidateAssessmentGenerator() {
  const [formData, setFormData] = useState({
    jobRole: '',
    skillType: '',
    numQuestions: 5
  })

  const [generatedQuestions, setGeneratedQuestions] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const questions = [
      'Describe a challenging project you\'ve worked on and how you overcame obstacles.',
      'How do you stay updated with the latest trends in your field?',
      'Explain a complex technical concept to a non-technical person.',
      'How do you prioritize tasks when working on multiple projects?',
      'Describe a situation where you had to learn a new skill quickly.'
    ]
    setGeneratedQuestions(questions)
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Automated Candidate Assessment Question Generator</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label htmlFor="jobRole" className="block mb-1">Job Role/Title</label>
          <input
            type="text"
            id="jobRole"
            className="w-full p-2 border rounded"
            value={formData.jobRole}
            onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="skillType" className="block mb-1">Skill Type</label>
          <input
            type="text"
            id="skillType"
            className="w-full p-2 border rounded"
            value={formData.skillType}
            onChange={(e) => setFormData({ ...formData, skillType: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="numQuestions" className="block mb-1">Number of Questions</label>
          <input
            type="number"
            id="numQuestions"
            className="w-full p-2 border rounded"
            min="1"
            max="10"
            value={formData.numQuestions}
            onChange={(e) => setFormData({ ...formData, numQuestions: parseInt(e.target.value) })}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center">
          <Zap className="mr-2" size={20} /> Generate Questions
        </button>
      </form>
      {generatedQuestions.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">Generated Questions:</h4>
          <ul className="space-y-2">
            {generatedQuestions.map((question, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span>{question}</span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit2 size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <Save size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

