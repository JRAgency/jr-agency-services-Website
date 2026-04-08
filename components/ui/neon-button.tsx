import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority"

const buttonVariants = cva(
  "relative group border text-foreground mx-auto text-center rounded-full inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-blue-500/5 hover:bg-blue-500/0 border-blue-500/20 text-white",
        solid:   "bg-white text-[#020408] border-transparent hover:bg-white/90",
        ghost:   "border-white/15 bg-transparent text-white/50 hover:text-white hover:border-white/35",
      },
      size: {
        default: "px-7 py-2 text-sm",
        sm:      "px-4 py-1.5 text-xs",
        lg:      "px-10 py-3.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type SharedProps = VariantProps<typeof buttonVariants> & {
  neon?: boolean
  className?: string
  children?: React.ReactNode
}

// Link variant
type NeonLinkProps = SharedProps &
  Omit<React.ComponentProps<typeof Link>, 'className' | 'children'> & {
    href: string
  }

// Button variant
type NeonButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined
  }

type Props = NeonLinkProps | NeonButtonProps

const NeonEffects = ({ neon }: { neon: boolean }) => neon ? (
  <>
    {/* Top neon shimmer on hover */}
    <span className="absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-400 to-transparent" />
    {/* Bottom neon line */}
    <span className="absolute opacity-20 group-hover:opacity-60 transition-all duration-500 inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-400 to-transparent" />
  </>
) : null

export function NeonButton({ className, neon = true, size, variant, children, href, ...props }: Props) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(props as Omit<NeonLinkProps, 'href' | 'className' | 'children' | 'neon' | 'size' | 'variant'>)}>
        <NeonEffects neon={neon} />
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      <NeonEffects neon={neon} />
      {children}
    </button>
  )
}

export { buttonVariants }
