import type { Metadata } from "next";
import { CaseStudy } from "../../page";

export const metadata: Metadata = {
  title: "Priority with Purpose — Product Design Case Study",
  description: "A feature-led product design case study that makes Priority more appealing through faster delivery and a gives-back benefit.",
};

export default function PriorityWithPurposePage() {
  return <CaseStudy variant="priority" />;
}
