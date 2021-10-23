import React from 'react';

import Link from './index';

export default {
  title: 'DisplayText/Link',
  component: Link,
};

const Template = (args) => <Link {...args}>Click here</Link>;

export const Default = Template.bind({});

Default.args = {
  busy: false,
  busyText: "Processing..",
  disable: false,
};