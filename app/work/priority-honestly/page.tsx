import type { Metadata } from "next";
import { CaseStudy } from "../../page";

export const metadata: Metadata = {
  title: "Priority, Honestly — Sivakorn",
  description: "A product design case study about making faster delivery compelling without dark patterns.",
};

export default function PriorityHonestlyPage() {
  return <CaseStudy variant="priority" />;
}
