
import { CountField } from "@/components/count-field";

export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About This Project</h1>
      <p className="mb-2">
        This project is a dashboard application built with Next.js and Zustand for state management. It allows users to manage and keep track of various links and information related to the Awardit plattforms. The platform is locally storing data using Zustand's persist middleware with localStorage.
      </p>
      <p className="mb-6">
        This project is created by Marcus Falck (marcus-df) and Sebastian Johansson.
      </p>
      <CountField />
    </div>
  );
}
