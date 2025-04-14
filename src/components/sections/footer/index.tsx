import {
  Footer,
  FooterBottom,
} from "../../ui/footer";
import { Separator } from "../../ui/separator";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  className?: string;
}

export default function FooterSection({
  copyright = "© 2025 Awardit. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "" },
    { text: "Terms of Service", href: "" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <Separator />
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
