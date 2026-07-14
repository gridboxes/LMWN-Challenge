import type { Metadata } from "next";
import { CaseStudy } from "../../page";

export const metadata: Metadata = {
  title: "Delivering Certainty — Sivakorn",
  description: "A product design case study for calm, contactless food-locker pickup.",
};

export default function DeliveringCertaintyPage() {
  return <CaseStudy variant="locker" />;
}
