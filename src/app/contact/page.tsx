import { Nav } from "@/components/Nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact - benadryl.dev",
  description: "get in touch with me"
};

export default function Home() {
  return (
    <>
      <Nav/>
      <h1 className="text-3xl text-center pb-0 pt-3">
        contact
      </h1>
      <p className="text-sm mt-4 mb-0 pb-5 text-center">
        if you are interested in contacting me, you can do so by email
      </p>
      <div className="mt-1 block text-center">
        <Link href="mailto:bk.2k@hotmail.com">
          <Button variant="outline">
            <i className="bi bi-envelope-fill"></i>
            bk.2k@hotmail.com
          </Button>
        </Link>
      </div>
    </>
  )
}
