# TODO

We will be moving to a lightweight ui library that doesn't include icons and other things

- [ ] Get rid of extra components
    - [ ] Remove Stack
    - [ ] Remove Unstyled Button
    - [ ] Remove Unstyled & Monochrome Link

- [ ] Migrate storybook components types

- [ ] Remove usages of generating an id at runtime
- [ ] Introduce custom components for easier adoption

    - [ ] Icon Button
    - [ ] Ripple

- [ ] Make Theme Feature Full
    - [x] Add 4 color shade variations 100,200,300,400 for bg, onBg, primary, accent
    - [x] map bg to bgPrimary and onBg to textPrimary
    - [x] hardcode variations in the theme objects
    - [ ] replace deprecated theme symbols with new symbols for each component

- Anique Tooling
  - [ ] the lightShades function creates 4 variations , s100 is 10% brighter , s200 is 20% brighter , s300 is 30% brighter and s400 is 40% brighter than the given color "s"
  - [ ] the darkShades function creates 4 variations , s100 is 10% darker , s200 is 20% darker , s300 is 30% darker , s400 is 40% darker than the given color "s"
  - [ ] create tooling site page that lets users input brand color hue value for primary, accent and generate theme object to be used with anique

- [ ] Component Separation

    - [ ] Icon Button
    - [ ] Button
    - [ ] Allow to change helper text color with color key
    - [ ] Checkbox , Labeled Checkbox & Helper Text
    - [ ] Radio Button , Labeled Radio & Helper Text
    - [ ] Textfield & Input , with & without leading & trailing icon

- [ ] Ensure components supports AniqueBaseProps

    - [x] Spinner
    - [ ] Other Components