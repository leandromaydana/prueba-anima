import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["group-19", "group-20"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "group-19",
    className: {},
    vectorClassName: {},
  },
};
