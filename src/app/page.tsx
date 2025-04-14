"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { UserRound } from 'lucide-react';

interface Profession {
  header: string;
  content: string;
  image: string;
}

export default function Home() {
  const [start, toggleStart] = useState<boolean>(false);
  const professions: Profession[] = [
    {
      header: "Frontend developer",
      content: "A preset for Frontend developers",
      image: "asd"
    },
    {
      header: "Backend developer",
      content: "A preset for Backend developers",
      image: "asd"
    },
    {
      header: "Customer Service",
      content: "A preset for Customer Service",
      image: "asd"
    },
  ] 
  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-full flex flex-col justify-center items-center">
      <div className="text-center">
        {!start ?
        <>
          <p className="mb-3">Welcome, click the button to start customize your dashboard</p>
          <Button onClick={() => toggleStart(true)}>Click here</Button> 
        </> :
        <>
          <p className="mb-3">Select a preset based on your role:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm gap-4">
            {professions.map((profession, i) => (
              <Card key={i}>
                <CardHeader>
                  {profession.header}
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <UserRound size={64} />
                  {profession.content}
                </CardContent>
                <CardFooter className="m-auto">
                  <Button onClick={() => toggleStart(true)}>Select this preset</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
        }
      </div>
    </div>
  );
}
