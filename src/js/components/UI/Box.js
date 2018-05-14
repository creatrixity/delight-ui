import styled from "react-emotion";
import { space, width, color, responsiveStyle } from "styled-system";
import PropTypes from "prop-types";
import theme from "./theme";

const align = responsiveStyle("text-align", "align");
const Box = styled.div`
  ${space} ${width} ${color} ${align};
`;

Box.displayName = "Box";

Box.defaultProps = {
  theme: theme
};

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
]);

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray,
  align: (props, name, component) => {
    if (!props[name]) return;
    return new Error(
      "The Box `align` prop will deprecated. Please use Text instead."
    );
  }
};

export default Box;
