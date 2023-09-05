import { OurTeam } from ".";

export default {
  title: "Components/OurTeam",
  component: OurTeam,
  argTypes: {
    property1: {
      options: ["frame-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-3",
    className: {},
    hasSpanNavIndicator: true,
    hasOurTeam: true,
  },
};
