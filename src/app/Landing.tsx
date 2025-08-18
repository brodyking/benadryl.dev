import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'

export function Landing() {
	return (
    <div className="flex items-center gap-0 md:gap-4 pb-8">
      <Link href="/me.jpg">
        <Image
          className="rounded-full mt-5 hidden md:block"
          src="/me.jpg"
          alt="me"
          width={200}
          height={200}
          />
      </Link>
      <div className="w-full mt-5 mb-5">
        <h1 className="text-3xl text-center">
          the personal website
          <br/>
          of brody king
        </h1>
        <p className="text-sm text-center mt-4 mb-2">
          i am a high school student who enjoys making web apps and other side projects for fun.
        </p>
        <div className="text-center mt-5">
        <Link href="https://github.com/brodyking">
          <Button variant="outline">
            <i className="bi bi-github"></i> @brodyking
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="ms-2">
            <i className="bi bi-envelope-fill"></i> contact
          </Button>
        </Link>
        </div>
      </div>
    </div>
  )
}
