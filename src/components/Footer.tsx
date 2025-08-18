import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export function Footer() {
  return (
    <>
    <p className="text-center text-sm mb-0 mt-8 opacity-25">
      &copy; 2025 brody king. all rights reserved.
    </p>
  {/*
      <ul className="text-center text-sm mb-0 mt-2 opacity-25 flex justify-center gap-x-4">
        <li>
          <Link href="/">
            <Button variant="link" className="p-0 m-0 w-min h-min">
              home
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/everything">
            <Button variant="link" className="p-0 m-0 w-min h-min">
              everything
            </Button>
          </Link>
        </li>
      </ul>
    */}
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="opacity-25 w-full mb-5">this site has no affiliation with the medication benadryl.</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              disclaimer
            <DialogDescription className="sr-only">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
              </DialogTitle>
          </DialogHeader>
          <p className="text-center">
            the name of this website and all other references on projects created by me, brody king, have no affiliation or relationship with the name-brand medication benadryl.
          </p>
          <p className="text-center">
            it is used in a satirical manor, not as an impersonation attempt.
          </p>
          <p className="text-center border-b-2 border-t-2 pt-2 pb-2">
            if you are looking for the actual benadryl medication, goto
            <br/>
            <Link href="https://www.benadryl.com" className="font-bold underline">
              https://www.benadryl.com/
            </Link>
            <i className="bi bi-box-arrow-up-right ml-2"></i>
          </p>
          <p className="text-center">
            this website and affiliate projects do not and never will sell medication.
          </p>
        </DialogContent>
    </Dialog>
    </>
  )
}

