import * as React from "react";

import { cn } from "@/lib/utils";
import type { InputProps } from "@/utils/interfaces";
import {
  FaE,
  FaEye,
  FaEyeLowVision,
  FaEyeSlash,
  FaIcons,
} from "react-icons/fa6";
import { type IconType } from "react-icons";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      showPassword = false,
      type,
      subfixIcon: SubfixIcon,
      prefixIcon: PrefixIcon,
      onClickIcon,
      ...props
    },
    ref
  ) => {
    // estados para manejar el tipo de input y el icono
    const [statePassword, setStatePassword] = React.useState(showPassword);
    const [typeInput, setTypeInput] = React.useState(type);
    const [Icon, setIcon] = React.useState(() => SubfixIcon);

    // si el tipo de input es password, se agrega un icono para mostrar la contraseña
    if (type === "password") {
      // si no se pasa un icono, se usa el icono de ojo
      if (!Icon) setIcon(() => FaEye);
      // se agrega la funcionalidad para mostrar la contraseña
      onClickIcon = () => {
        setStatePassword(() => !statePassword);
      };
    }

    React.useEffect(() => {
      if (type != "password") return;
      setTypeInput(statePassword ? "text" : "password");
      setIcon(() => (statePassword ? FaEyeSlash : FaEye));
    }, [statePassword]);

    return (
      <div className="relative flex items-center">
        {Icon && (
          <a
            className={`absolute right-3 text-muted-foreground ${
              onClickIcon ? "cursor-pointer hover:text-primary" : null
            }`}
            onClick={onClickIcon}
          >
            <Icon />
          </a>
        )}
        <input
          type={typeInput}
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
