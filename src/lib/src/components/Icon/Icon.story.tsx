import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';
import { Icon } from '.';
import {SvgHomeMajor} from "../../../config/jest/__mocks__/SvgMock";
import {AlertMinor} from "../../icons";

export default {
  title: 'Components/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const DefaultIcon: ComponentStoryFn<typeof Icon> = Template.bind({});
DefaultIcon.args = {
  source: AlertMinor
};
