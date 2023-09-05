import { OurServices } from ".";

export default {
  title: "Components/OurServices",
  component: OurServices,
  argTypes: {
    property1: {
      options: ["frame-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-2",
    className: {},
    hasSpanNavIndicator: true,
    hasOurServices: true,
  },
};
