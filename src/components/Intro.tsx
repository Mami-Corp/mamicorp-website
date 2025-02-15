import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { BsGithub, BsTwitterX } from 'react-icons/bs'

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-thin text-black">
        Mami Corp.{' '}
      </h1>
      <p className="mt-4 text-sm/6 text-gray-800">
        Enterprise AI baddie solutions.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://x.com/fanixbt"
          icon={<BsTwitterX />}
          className="flex-none"
        >
          fanixbt
        </IconLink>
        <IconLink
          href="https://x.com/MamiCorp"
          icon={<BsTwitterX />}
          className="flex-none"
        >
          MamiCorp
        </IconLink>
        <IconLink href="https://github.com/Mami-Corp" icon={<BsGithub />} className="flex-none">
          GitHub
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500"></p>
  )
}
