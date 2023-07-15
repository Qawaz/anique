import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Link.story'; // import all stories from the stories file
import { lightTheme } from '../../styles';

const { DefaultLink, ExternalLink, MonochromeLink, UnstyledLink } =
  composeStories(stories);

describe('components/Link', () => {
  it('Renders Default Link', () => {
    const textContent = 'Link';
    render(<DefaultLink>{textContent}</DefaultLink>);
    const linkEl = screen.getByTestId('link');
    const linkText = linkEl.querySelector('.Anique-LinkText') as HTMLElement;
    expect(linkEl).not.toBeNull();
    expect(linkEl).toHaveAttribute('href', DefaultLink.args?.url);
    expect(linkText).toHaveTextContent(textContent);
    expect(linkEl).toHaveStyle({
      color: lightTheme.color.linkPrimary,
      'text-decoration': 'underline'
    });
  });
  it('Renders External Link', () => {
    render(<ExternalLink />);
    const linkEl = screen.getByTestId('link');
    const linkText = linkEl.querySelector('.Anique-LinkText');
    const externalIcon = screen.getByTestId('icon-external');
    expect(linkEl).not.toBeNull();
    expect(linkEl).toHaveAttribute('href', ExternalLink.args?.url);
    expect(linkEl).toHaveAttribute('target', '_blank');
    expect(linkEl).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkText).toHaveTextContent(ExternalLink.args?.children as string);
    expect(linkEl).toHaveStyle({
      color: lightTheme.color.linkPrimary
    });
    expect(externalIcon).not.toBeNull();
  });
  it('Renders Monochrome Link', () => {
    render(<MonochromeLink />);
    const linkEl = screen.getByTestId('link');
    const linkText = linkEl.querySelector('.Anique-LinkText');
    expect(linkEl).not.toBeNull();
    expect(linkEl).toHaveAttribute('href', MonochromeLink.args?.url);
    expect(linkText).toHaveTextContent(MonochromeLink.args?.children as string);
    expect(linkEl).toHaveStyle({
      color: lightTheme.color.textPrimary,
      'text-decoration': 'underline'
    });
  });
  it('Renders Unstyled Link', () => {
    render(<UnstyledLink />);
    const linkEl = screen.getByTestId('link');
    const linkText = linkEl.querySelector('.Anique-LinkText');
    expect(linkEl).not.toBeNull();
    expect(linkEl).toHaveAttribute('href', UnstyledLink.args?.url);
    expect(linkText).toHaveTextContent(UnstyledLink.args?.children as string);
    expect(linkEl).toHaveStyle({
      color: lightTheme.color.textPrimary,
      'text-decoration': 'none'
    });
  });
});
