import type { Meta, StoryObj } from "@storybook/react";
import DropdownFooter from "./dropdown-footer";
import { NAVIGATION_FOOTER } from "../footer";

const meta: Meta<typeof DropdownFooter> = {
  component: DropdownFooter,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navFooter: NAVIGATION_FOOTER[0],
  },
  parameters: {
    backgrounds: {
      values: [{ name: "footer", value: "#202125" }],
      default: "footer",
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "16px" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
