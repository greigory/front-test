import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LayerCard } from './LayerCard';

export default {
  title: 'Example/LayerCard',
  component: LayerCard,

} as ComponentMeta<typeof LayerCard>;

const Template: ComponentStory<typeof LayerCard> = (args) => <LayerCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  checked: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  checked: false,
};

export const ActiveAndChecked = Template.bind({});
ActiveAndChecked.args = {
  active: true,
  checked: true,
};