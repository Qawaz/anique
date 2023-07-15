# TODO

We will be moving to a lightweight ui library that doesn't include icons and other things

- [x] Remove any usages of ursa-icons from lib

- [x] Get rid of ursa-icons package and build the storybook

- [x] Get rid of ursa-emotional and build the story book

- [x] Get rid of extra components
    - [x] Remove Breadcrumbs Component
    - [x] Remove Page Component
    - [x] Remove Pagination Component
    - [x] Remove ResourceItem
    - [x] Remove DropZone
    - [ ] Remove Stack
    - [ ] Remove Unstyled Button
    - [ ] Remove Unstyled & Monochrome Link

- [x] Shift icons package to new branch (svgr-icons)

- [x] Rename folder ursa-core to lib

- [x] Make headings simpler , use H1,H2,H3,H4,H5,H6

- [x] Create a demo package

- [x] Test generated test in link library in demo package

- [ ] Migrate storybook components types

- [ ] Remove usages of generating an id at runtime

- [x] Remove unused icons

- [x] Upgrade story book to v7

- [x] Build docs site to docs/

- [x] Build storybook to docs/storybook folder

- [x] Remove turbo

- [x] Fix theme color names to not be prefixed with double dashes, use direct accessor instead of string access

- [ ] Introduce custom components for easier adoption in account-management

- [ ] Fix components compatibility with both themes

    - [x] ActionList
    - [x] Card
    - [x] Icon (in stories) not displaying in both themes
    - [x] Input (in DarkMode) the border is too visible
    - [x] Link component hides underline on hover , remove it
    - [x] Popover menu
    - [x] Radio story displays a card , in Docs mode , radio doesn't display right in dark mode
    - [x] Toast
    - [x] Tooltip background color

- [ ] Component Separation

    - [ ] Build a complex form and analyze the source code and build required components
    - [ ] Allow to change helper text color with color key
    - [ ] Checkbox , Labeled Checkbox & Helper Text
    - [ ] Radio Button , Labeled Radio & Helper Text
    - [ ] Input

- [ ] Build a simple site for the main page as a demo