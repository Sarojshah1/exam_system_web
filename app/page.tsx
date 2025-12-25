import Link from "next/link";
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-sm shadow-md border border-gray-200 text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-900 p-3 rounded-full">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          University Exam Portal
        </h1>
        <p className="text-gray-600 mb-8 text-sm">
          Secure Assessment & Evaluation System
        </p>

        <div className="space-y-3">
          <Link
            href="/login"
            className="block w-full bg-blue-900 text-white py-2.5 rounded hover:bg-blue-800 transition font-medium"
          >
            Access Portal
          </Link>
          <Link
            href="/register"
            className="block w-full bg-white text-blue-900 border border-blue-900 py-2.5 rounded hover:bg-blue-50 transition font-medium"
          >
            Student Registration
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Authorized Personnel Only. All activities are monitored.
        </p>
      </div>
    </div>
  );
}
