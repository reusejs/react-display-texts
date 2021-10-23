import React from 'react';

import FormHeading from './index';

export default {
  title: 'DisplayText/FormHeading',
  component: FormHeading,
};

const Template = (args) => <FormHeading {...args}>Signup</FormHeading>;

export const Default = Template.bind({});

Default.args = {
  busy: false,
  busyText: "Processing..",
  disable: false,
};