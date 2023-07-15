import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn
} from '@storybook/react';

import { Invisible } from './Invisible';
import {H2} from '../Heading';
import { FormLayout } from '../FormLayout';
import { Textfield } from '../Textfield';
import { Form } from '../Form';

export default {
  title: 'Components/Invisible',
  component: Invisible
} as ComponentMeta<typeof Invisible>;

const Template: ComponentStory<typeof Invisible> = () => (
  <Form onSubmit={() => {}}>
    <Invisible>
      <H2>This Title is Hidden</H2>
    </Invisible>
    <FormLayout>
      <Textfield name="email" label="Email" />
    </FormLayout>
  </Form>
);

export const DefaultInvisible: ComponentStoryFn<typeof Invisible> =
  Template.bind({});
DefaultInvisible.args = {};
