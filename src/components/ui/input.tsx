import * as React from "react";

import { cn } from "@/lib/utils";
import type { InputProps } from "@/utils/interfaces";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      subfixIcon: SubfixIcon,
      prefixIcon: PrefixIcon,
      onClickIcon,
      ...props
    },
    ref
  ) => {
    return (
      // agregar un icono de busqueda al input
      <div className="relative flex items-center">
        {SubfixIcon && (
          <a
            className="absolute right-3 text-muted-foreground cursor-pointer hover:text-primary"
            onClick={onClickIcon}
          >
            <SubfixIcon />
          </a>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            PrefixIcon && "pl-8",
            SubfixIcon && "pr-8",
            className
          )}
          ref={ref}
          {...props}
        />
        {PrefixIcon && (
          <PrefixIcon className="absolute left-3 text-muted-foreground" />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
