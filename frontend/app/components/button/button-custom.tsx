import { Button, extendVariants } from "@nextui-org/react";

const ButtonCustom = extendVariants(Button, {
  variants: {
    size: {
      md: "px-6",
    },
  },
});

export default ButtonCustom;
