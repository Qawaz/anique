import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryFn, StoryFn, StoryObj
} from '@storybook/react';

import {Anchor, ExternalAnchor, Link} from '.';

export default {
  title: 'Components/Link',
  component: Anchor
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const AnchorObj : { args: { children: string; underlineOnHover: boolean; underlined: boolean; colored: boolean; href: string }; name: string } = {
  name : "Anchor",
  args : {
      underlined : true,
      colored : true,
      underlineOnHover : false,
      href : "http://github.com/Qawaz/anique",
      children : "My Anchor Link"
  }
}

export const ExternalAnchorComponent : StoryFn<typeof ExternalAnchor> = () => {
  return (
      <ExternalAnchor href={"https://github.com/Qawaz/anique"}>My External Link</ExternalAnchor>
  )
}

export const DefaultLink: ComponentStoryFn<typeof Link> = Template.bind({});
DefaultLink.args = {
  url: 'https://www.github.com/Qawaz/anique',
  children: 'Visit the Anique Github page'
};

export const ExternalLink: ComponentStoryFn<typeof Link> = Template.bind({});
ExternalLink.args = {
  url: 'https://www.github.com/Qawaz/anique',
  children: 'Visit the Anique Github page',
  external: true
};

export const MonochromeLink: ComponentStoryFn<typeof Link> = Template.bind({});
MonochromeLink.args = {
  url: 'https://www.github.com/Qawaz/anique',
  children: 'Visit the Anique Github page',
  monochrome: true
};

export const UnstyledLink: ComponentStoryFn<typeof Link> = Template.bind({});
UnstyledLink.args = {
  url: 'https://www.github.com/Qawaz/anique',
  children: 'Visit the Anique Github page',
  unstyled: true,
  external: true
};
