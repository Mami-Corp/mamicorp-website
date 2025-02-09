import Link from 'next/link'
import clsx from 'clsx'
import { ReactNode } from 'react'

export function IconLink({
  children,
  className,
  compact = false,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  compact?: boolean
  icon?: ReactNode
}) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-black/30 transition-colors hover:text-sky-300',
        compact ? 'gap-x-2' : 'gap-x-3',
      )}
    >
      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-black/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
      {Icon}
      <span className="self-baseline text-black">{children}</span>
    </Link>
  )
}
