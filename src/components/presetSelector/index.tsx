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
  name: string;
  header: string;
  content: string;
}

export default function PresetSelector() {
  const selectPreset = usePresetStore((state) => state.selectPreset);
  const setPreset = usePresetStore((state) => state.setPreset);
  const setSelectPreset = usePresetStore((state) => state.setSelectPreset);
  const professions: Profession[] = [
    {
      name: "Frontend",
      header: "Frontend developer",
      content: "A preset for Frontend developers",
    },
    {
      name: "Backend",
      header: "Backend developer",
      content: "A preset for Backend developers",
    },
    {
      name: "CustomerService",
      header: "Customer Service",
      content: "A preset for Customer Service",
    },
  ];

  return (
    <div className="text-center">
      {!selectPreset ? (
        <>
          <p className="mb-3">
            Welcome, click the button to start customizing your dashboard
          </p>
          <Button onClick={setSelectPreset}>Start</Button>
        </>
      ) : (
        <>
          <p className="mb-3">Select a preset based on your role:</p>
          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl">
            {professions.map((profession, i) => (
              <Card key={i}>
                <CardHeader>{profession.header}</CardHeader>
                <CardContent className="flex flex-col items-center">
                  <UserRound size={64} />
                  {profession.content}
                </CardContent>
                <CardFooter className="m-auto">
                  <Button onClick={() => setPreset(profession.name)}>
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