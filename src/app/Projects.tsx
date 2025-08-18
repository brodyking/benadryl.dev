import { Button } from '@/components/ui/button'
import Link from "next/link";

export function Projects() {
  return (
    <>
      <h1 className="text-2xl border-b pb-2">my work</h1>
      <div className="flex gap-2 flex-wrap md:flex-nowrap pt-3">
        <div className="flex-auto border rounded-md p-3">
          <h1 className="text-xl border-b pb-1 mb-1">chipledger</h1>
          <p className="text-sm mt-2 mb-2">a poker buy in tracker for home games.</p>
          <Link href="https://chipledger.com" target="_blank" className="text-xl">
            <Button variant="outline" className="w-full mb-3">
              <i className="bi bi-box-arrow-up-right"></i>
              chipledger.com
            </Button>
          </Link>
          <Link href="https://github.com/brodyking/chipledger" className="text-xl">
            <Button variant="outline" className="w-full">
              <i className="bi bi-github"></i>
              source code
            </Button>
          </Link>
        </div>
        <div className="flex-auto border rounded-md p-3">
          <h1 className="text-xl border-b pb-1 mb-1">pouchtrack</h1>
          <p className="text-sm mt-2 mb-2 md:mb-7">nicotine intake tracker</p>
          <Link href="https://pouchtrack.net" target="_blank" className="text-xl">
            <Button variant="outline" className="w-full mb-3">
              <i className="bi bi-box-arrow-up-right"></i>
              pouchtrack.net
            </Button>
          </Link>
          <Link href="https://github.com/brodyking/ptrack" className="text-xl">
            <Button variant="outline" className="w-full">
              <i className="bi bi-github"></i>
              source code
            </Button>
          </Link>
        </div>
        <div className="flex-auto border rounded-md p-3">
          <h1 className="text-xl border-b pb-1 mb-1">flashcarrd</h1>
          <p className="text-sm mt-2 mb-2 md:mb-7">a simple flashcard app</p>
          <Link href="https://fc.benadryl.dev" target="_blank" className="text-xl">
            <Button variant="outline" className="w-full mb-3">
              <i className="bi bi-box-arrow-up-right"></i>
              fc.benadryl.dev
            </Button>
          </Link>
          <Link href="https://github.com/brodyking/flashcarrd" className="text-xl">
            <Button variant="outline" className="w-full">
              <i className="bi bi-github"></i>
              source code
            </Button>
          </Link>
        </div>
      </div>
      <Link href="/everything" className="text-xl mt-5 block">
        <Button variant="link" className="w-full">
          view more
          <i className="bi bi-arrow-right"></i>
        </Button>
      </Link>
    </>
  )  
}
