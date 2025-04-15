"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { UserRound } from "lucide-react";
import { usePresetStore } from "@/store/preset";

interface Profession {
  header: string;
  content: string;
}

export default function Presets() {
  const preset = usePresetStore((state) => state.preset);
  const selectPreset = usePresetStore((state) => state.selectPreset);
  const setPreset = usePresetStore((state) => state.setPreset);
  const setSelectPreset = usePresetStore((state) => state.setSelectPreset);
  const professions: Profession[] = [
    {
      header: "Frontend developer",
      content: "A preset for Frontend developers",
    },
    {
      header: "Backend developer",
      content: "A preset for Backend developers",
    },
    {
      header: "Customer Service",
      content: "A preset for Customer Service",
    },
  ];

  return (
    <div className="text-center">
      {!preset && !selectPreset ? (
        <>
          <p className="mb-3">
            Welcome, click the button to start customizing your dashboard
          </p>
          <Button onClick={setSelectPreset}>Start</Button>
        </>
      ) : (
        <>
          <p className="mb-3">Select a preset based on your role:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm gap-4">
            {professions.map((profession, i) => (
              <Card key={i}>
                <CardHeader>{profession.header}</CardHeader>
                <CardContent className="flex flex-col items-center">
                  <UserRound size={64} />
                  {profession.content}
                </CardContent>
                <CardFooter className="m-auto">
                  <Button onClick={() => setPreset(profession.header)}>
                    Select this preset
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}