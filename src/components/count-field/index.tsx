"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCounterStore } from "@/store/count-persist";

// Calling Zustand outside of react function (without hook)
// const logCount = () => {
//   // Getter
//   const count = useCounterStore.getState().count;
//   // Setter
//   useCounterStore.setState({ count: 1 })
//   console.log(count);
// }

export function CountField() {
  // Calling Zustand inside of react function (with hook)
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <Card className="m-1 mt-3 w-64">
      <CardContent>
        Count: {count}
        <div className="flex flex-col gap-2 mt-2">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
      </CardContent>
    </Card>
  );
}