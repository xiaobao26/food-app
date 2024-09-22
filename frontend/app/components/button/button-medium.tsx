import { Button, extendVariants } from "@nextui-org/react";

const ButtonMedium = extendVariants(Button, {
  variants: {
    size: {
      md: "font-n2r text-xs min-w-32 h-8 px-6 rounded-full",
    },
  },
});

export default ButtonMedium;
