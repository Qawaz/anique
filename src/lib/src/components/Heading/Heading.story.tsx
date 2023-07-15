import React from 'react';
import {
    Meta, StoryFn,
    StoryObj
} from '@storybook/react';

import { H1,H2,H3,H4,H5,H6 } from "./Heading"

export default {
    title: 'Components/Heading',
    component: H1
} as Meta<typeof H1>;

export const Heading1: StoryFn = (props) => {
    return <H1>{props.children}</H1>
}

Heading1.args = {
    children : "This is my heading 1"
}

export const Heading2: StoryFn = (props) => {
    return <H2>{props.children}</H2>
}

Heading2.args = {
    children : "This is my heading 2"
}

export const Heading3: StoryFn = (props) => {
    return <H3>{props.children}</H3>
}

Heading3.args = {
    children : "This is my heading 3"
}

export const Heading4: StoryFn = (props) => {
    return <H4>{props.children}</H4>
}

Heading4.args = {
    children : "This is my heading 4"
}

export const Heading5: StoryFn = (props) => {
    return <H5>{props.children}</H5>
}

Heading5.args = {
    children : "This is my heading 5"
}

export const Heading6: StoryFn = (props) => {
    return <H6>{props.children}</H6>
}

Heading6.args = {
    children : "This is my heading 6"
}