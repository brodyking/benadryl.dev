import { Nav } from "@/components/Nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next";
import { List } from "@/app/everything/list"

export const metadata: Metadata = {
  title: "everything - benadryl.dev",
  description: "all of my public projects over the years"
};

export default function Home() {
  return (
    <>
      <Nav/>
      <h1 className="text-3xl text-center pb-0 pt-3">
        everything
      </h1>
      <p className="text-sm mt-4 mb-0 pb-9 border-b text-center">
        here is a list of almost all my work<br/>
        sorted by newest <i className="bi bi-arrow-right"></i> oldest.
      </p>
      <List/>
    </>
  )
}
