import { cva, VariantProps } from "class-variance-authority";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const buttonBaseVariants = cva(
  "flex justify-center items-center bg-transparent",
  {
    variants: {
      size: {
        large: "py-2 px-[138px]",
        medium: "py-2 px-14",
        small: "py-1 px-8",
      },
      variant: {
        stroke:
          "text-white border border-primary-100 rounded-[64px] overflow-hidden relative group hover:text-black hover:bg-background-200 transition-colors",
        "no-stroke": "text-black",
      },
    },
    defaultVariants: {
      size: "large",
      variant: "stroke",
    },
  }
);

function ButtonBase({
  className,
  size,
  variant = "stroke",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonBaseVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Button
      className={cn(buttonBaseVariants({ size, variant, className }))}
      {...props}
    >
      {variant === "stroke" && (
        <>
          <span className="absolute inset-0 bg-primary-100 bottom-1/2 -z-10 group-hover:-translate-x-full transition-transform" />
          <span className="absolute inset-0 bg-primary-100 top-1/2 -z-10 group-hover:translate-x-full transition-transform" />
        </>
      )}
      {children}
    </Button>
  );
}

export { ButtonBase, buttonBaseVariants };
