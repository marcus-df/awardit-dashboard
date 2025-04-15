"use client"

import { FrontendPreset } from "@/components/presets/frontend";
import { BackendPreset } from "@/components/presets/backend";
import { CustomerServicePreset } from "@/components/presets/customer-service";


interface Props {
  preset: string | null;
}
function PresetSwitch({ preset }: Props) {
  switch (preset) {
    case "Frontend":
      return <FrontendPreset />

    case "Backend":
      return <BackendPreset />

    case "CustomerService":
      return <CustomerServicePreset />

    default:
      return null;
  }
}

export function Presets({ preset }: Props) {
  return (
    <>
      <PresetSwitch preset={preset} />
    </>
  )
};