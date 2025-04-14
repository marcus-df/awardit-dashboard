"use client";

import { LinkField } from "@/components/field/link-field";
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

const links = [
  {
    href: "https://magento6.crossroads.se/administration/",
    title: "Magento 6",
    starred: false,
    external: true
  },
  {
    href: "https://magento7.crossroads.se/administration/",
    title: "Magento 7",
    starred: false,
    external: true
  },
  {
    href: "https://magento9.crossroads.se/administration/",
    title: "Magento 9",
    starred: false,
    external: true
  },
  {
    href: "https://magento10.crossroads.se/administration/",
    title: "Magento 10",
    starred: false,
    external: true
  },
  {
    href: "https://magento10a.crossroads.se/magento-index.php/administration",
    title: "Magento 10 Ahlsell",
    starred: false,
    external: true
  },
  {
    href: "https://magento11.crossroads.se/administration/",
    title: "Magento 11",
    starred: false,
    external: true
  },
  {
    href: "https://sas-next-admin.crossroads.se/magento-index.php/administration/",
    title: "Magento SAS",
    starred: false,
    external: true
  },
]

export default function About() {
  // Calling Zustand inside of react function (with hook)
  const count = useCounterStore((state) => state.count);
  const increment =  useCounterStore((state) => state.increment)
  const decrement =  useCounterStore((state) => state.decrement)

  return (
    <>
    <Card className="m-1 mt-3 w-64">
      <CardContent>
        Count: {count}
        <div className="flex flex-col gap-2 mt-2">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
      </CardContent>
    </Card>
    <LinkField links={links} title="Magento" className="m-1 mt-3" />
    </>
  );
}
