import { Nav } from "@/components/Nav"
import { Landing } from "@/app/Landing"
import { Projects } from "@/app/Projects"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "benadryl.dev",
  description: "my personal projects"
};

export default function Home() {
  return (
    <>
      <Nav/>
      <Landing/>
      <Projects/>
    </>
  )
}
