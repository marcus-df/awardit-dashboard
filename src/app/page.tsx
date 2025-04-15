"use client"
import SkeletonLoader from "@/components/loader";
import dynamic from 'next/dynamic'

const Presets = dynamic(
  () => import("@/components/presets"),
  {
    loading: () => <SkeletonLoader />,
    ssr: false
  }
);

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-full flex flex-col justify-center items-center">
      <Presets />
    </div>
  );
}
