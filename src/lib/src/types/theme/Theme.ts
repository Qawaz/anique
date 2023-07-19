import {ThemeColors} from "./ThemeColors";
import {Font, FontSize} from "./Font";
import {Border} from "./Border";
import {Animation} from "./Animation";
import {ThemeBreakpoints} from "./Breakpoint";

export interface AniqueTheme {
    color: ThemeColors;
    font: Font;
    fontSize: FontSize;
    border: Border;
    animation: Animation;
    breakpoints : ThemeBreakpoints
}