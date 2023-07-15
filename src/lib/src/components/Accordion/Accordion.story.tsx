import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {Accordion} from './Accordion';
import {itemsData} from './data.mock';

const meta : Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    decorators: [(Story) => <Story/>]
}

export default meta

const Template: StoryFn<typeof Accordion> = ({items, ...args}) => (
    <Accordion items={itemsData} {...args} />
);

export const BasicAccordion: StoryFn<typeof Accordion> = Template.bind(
    {}
);
