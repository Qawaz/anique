import {Color} from "./Color";
import {Font, FontSize} from "./Font";
import {Border} from "./Border";
import {Animation} from "./Animation";

export interface AniqueTheme {
    color: Color;
    font: Font;
    fontSize: FontSize;
    border: Border;
    animation: Animation;
}