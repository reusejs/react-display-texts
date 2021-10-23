import React from 'react';

import FormLabel from './index';

export default {
  title: 'DisplayText/FormLabel',
  component: FormLabel,
};

const Template = (args) => <FormLabel {...args}>Username</FormLabel>;

export const Default = Template.bind({});

Default.args = {
  busy: false,
  busyText: "Processing..",
  disable: false,
};