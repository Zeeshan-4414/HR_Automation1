'use client';
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Question {
  type: "multiple_choice" | "open_ended";
  question: string;
  options?: string[];
  correctAnswer: string;
}

export default function TestCreation() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const generateTest = async (role: string, numberOfQuestions: number = 10) => {
    const API_KEY = "AIzaSyDGrVWIgB-AovjfvYoDzLKm-cAHPjqWU3c"; // Replace with your Gemini API key
    const genAI = new GoogleGenerativeAI(API_KEY);

    const prompt = `Create ${numberOfQuestions} interview questions for a ${role} position.
    Format:
    [
      {
        "type": "multiple_choice",
        "question": "What is...",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": "A"
      }
    ]`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();

      const startIdx = responseText.indexOf("[");
      const endIdx = responseText.lastIndexOf("]") + 1;

      if (startIdx === -1 || endIdx === 0) {
        throw new Error("Invalid response format");
      }

      const jsonStr = responseText.slice(startIdx, endIdx);
      const questions = JSON.parse(jsonStr);

      return questions.map((q: any) => ({
        type: q.type === "multiple_choice" ? "multiple_choice" : "open_ended",
        question: q.question,
        options: q.options || [],
        correctAnswer: q.correctAnswer,
      }));
    } catch (err) {
      console.error("Error generating test:", err);
      throw new Error("Failed to generate test questions.");
    }
  };

  const handleGenerateTest = async () => {
    if (!role.trim()) {
      setError("Please enter a job role");
      return;
    }

    setLoading(true);
    setError("");
    setQuestions([]);

    try {
      const generatedQuestions = await generateTest(role);
      setQuestions(generatedQuestions);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate test. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (questionIndex: number, selectedOption: string) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionIndex]: selectedOption,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-600">
        Candidate Assessment Test
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Enter Job Role (e.g., Software Engineer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full sm:w-2/3 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGenerateTest}
          disabled={loading || !role.trim()}
          className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <span>Generating...</span>
            </span>
          ) : (
            "Generate Test"
          )}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div className="space-y-6">
        {questions.map((q, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md border border-gray-200 transform transition-all "
          >
            <p className="font-semibold text-lg text-gray-800">{q.question}</p>
            {q.type === "multiple_choice" && q.options && (
              <ul className="mt-2 space-y-2">
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => handleOptionSelect(index, opt)}
                  >
                    <span
                      className={`w-4 h-4 border-2 rounded-full ${selectedAnswers[index] === opt ? "bg-blue-600 border-blue-600" : "border-gray-400"}`}
                    ></span>
                    <span className={`text-gray-600 ${selectedAnswers[index] === opt ? "text-blue-600 font-semibold" : ""}`}>
                      {opt}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-2 text-sm text-gray-500">
              <strong>Correct Answer:</strong> {q.correctAnswer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
