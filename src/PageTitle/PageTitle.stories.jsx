import React from 'react';

import PageTitle from './index';

export default {
  title: 'DisplayText/PageTitle',
  component: PageTitle,
};

const Template = (args) => <PageTitle {...args}>About Page</PageTitle>;

export const Default = Template.bind({});

Default.args = {
  busy: false,
  busyText: "Processing..",
  disable: false,
};