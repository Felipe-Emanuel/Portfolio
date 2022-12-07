import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export function CheckBox(props) {
  return (
    <CheckboxPrimitive.Root
      className="w-5 h-5 p-[2px] ring-1 ring-colorsIcons rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight="bold"
          className="h-4 w-4 text-center text-violet-500"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
