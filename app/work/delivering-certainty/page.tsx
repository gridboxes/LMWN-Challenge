import type { Metadata } from "next";
import { CaseStudy } from "../../page";

export const metadata: Metadata = {
  title: "Delivering Certainty — Product Design Case Study",
  description: "A product design case study for calm, contactless food-locker pickup.",
};

export default function DeliveringCertaintyPage() {
  return <CaseStudy variant="locker" />;
}
