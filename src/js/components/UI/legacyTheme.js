import theme from "./theme";

const black = "#000";
const white = "#fff";
const text = "#333";
const blue = "#0a84c1";
const green = "#3c910e";
const orange = "#ffaf00";
const red = "#df000f";
const gray = "#666";

const blue0 = "#cee6f3";
const blue1 = "#9dcee6";
const blue2 = "#6cb5da";
const blue3 = "#3b9dcd";

const gray0 = "#d9d9d9";
const gray1 = "#ccc";
const gray2 = "#999";
const gray3 = "#666";

const green0 = "#ecf9e5";
const green1 = "#b1d39f";
const green2 = "#8abd6e";
const green3 = "#63a73e";

const red0 = "#f9cccf";
const red1 = "#f2999f";
const red2 = "#ec666f";
const red3 = "#e5333f";

const orange0 = "#ffefcc";
const orange1 = "#ffdf99";
const orange2 = "#ffcf66";
const orange3 = "#ffbf33";

export const colors = {
  black,
  white,
  text,
  blue,
  gray,
  green,
  orange,
  red,

  blue0,
  blue1,
  blue2,
  blue3,

  gray0,
  gray1,
  gray2,
  gray3,

  green0,
  green1,
  green2,
  green3,

  red0,
  red1,
  red2,
  red3,

  orange0,
  orange1,
  orange2,
  orange3
};

const legacyTheme = { ...theme, colors };
export default legacyTheme;
