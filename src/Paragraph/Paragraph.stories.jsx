import React from "react";

import Paragraph from "./index";

export default {
  title: "DisplayText/Paragraph",
  component: Paragraph,
};

const Template = (args) => (
  <Paragraph {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis
    accumsan dui, at iaculis turpis accumsan eget. Vivamus ultrices posuere
    pretium. Mauris faucibus ut magna sed accumsan. Nam non faucibus massa.
    Integer ornare quis erat sit amet pharetra. Ut dapibus porta felis, eu
    lobortis nibh vulputate rhoncus. Pellentesque lobortis imperdiet sapien, sed
    suscipit nunc interdum id. Nunc ullamcorper, diam id venenatis vehicula,
    diam tellus tincidunt sapien, suscipit suscipit lectus nunc eget tortor.
    Donec posuere ligula in ipsum semper luctus. Nullam rutrum lacus vitae
    varius finibus. Aenean condimentum justo at nisl sollicitudin pretium. Donec
    non libero ac turpis faucibus dictum.
  </Paragraph>
);

export const Default = Template.bind({});

Default.args = {
  busy: false,
  busyText: "Processing..",
  disable: false,
};
