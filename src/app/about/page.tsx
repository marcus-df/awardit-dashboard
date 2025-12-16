import { CountField } from "@/components/count-field";

export default function About() {
  return (
    <div className="px-2 py-3">
      <h1 className="text-2xl font-bold mb-4">About This Project</h1>
      <p className="mb-6 max-w-4xl">
        This project is a dashboard application built with Next.js and Zustand
        for state management. It allows users to manage and keep track of
        various links and information related to the Awardit platforms. The
        platform is locally storing data using Zustand's persist middleware with
        localStorage.
      </p>
      <p className="mb-6 max-w-4xl">
        The counter below demonstrates the use of Zustand for state management
        with persistence. You can increment and decrement the count, and the
        value will be saved so that you can refresh or close the page and return later.
      </p>
      <CountField />
    </div>
  );
}
