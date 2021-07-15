import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Calculator, CalculatorProps } from './';

export default {
  title: 'Calculator',
  component: Calculator,
  description: `A Calculator that works!`,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    primary: { control: 'boolean' }
  }
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<CalculatorProps> = (args) => <Calculator {...args}>Click me xd</Calculator>;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
