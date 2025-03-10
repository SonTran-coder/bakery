import { cva, VariantProps } from "class-variance-authority";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const inputBaseVariant = cva(
  "px-8 py-2 font-medium leading-loose text-sm text-primary-300 border border-primary-300 rounded-[64px] h-[44px] focus-visible:border-primary-100 focus-visible:text-primary-100",

  {
    variants: {
      size: {
        large: "max-w-[400px]",
        small: "max-w-[196px]",
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
);

function InputBase({
  className,
  size,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputBaseVariant>) {
  return (
    <Input className={cn(inputBaseVariant({ size, className }))} {...props} />
  );
}

export { InputBase };
