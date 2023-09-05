import { Text } from ".";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    property1: {
      options: ["frame-8", "frame-9", "frame-10"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-8",
  },
};
