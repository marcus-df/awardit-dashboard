"use client"
import SkeletonLoader from "@/components/loader";
import dynamic from 'next/dynamic'
import { usePresetStore } from "@/store/preset";

const PresetSelector = dynamic(
  () => import("@/components/profile-preset-selector"),
  {
    loading: () => <SkeletonLoader />,
    ssr: false
  }
);
const PresetsComponents = dynamic(
  () => import("@/components/profile-presets").then((mod) => mod.Presets),
  {
    loading: () => <SkeletonLoader />,
    ssr: false
  }
);

export default function Home() {
  const preset = usePresetStore((state) => state.preset);

  console.log("Current preset:", preset);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-full flex flex-col justify-center items-center">
      {preset 
        ? <PresetsComponents preset={preset} /> 
        : <PresetSelector />
      }
    </div>
  );
}
