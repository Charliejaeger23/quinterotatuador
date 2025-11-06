import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-red/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-ink-black",
  {
    variants: {
      variant: {
        default: "bg-ink-red text-ink-white hover:bg-ink-red/90",
        destructive: "bg-ink-red text-ink-white hover:bg-ink-red/90",
        outline: "border border-ink-red text-ink-white hover:bg-ink-red/10",
        secondary: "bg-ink-soft text-ink-white hover:bg-ink-soft/80",
        ghost: "hover:bg-ink-red/10 text-ink-white",
        link: "text-ink-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }