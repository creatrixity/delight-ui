import styled from "react-emotion";
import PropTypes from "prop-types";
import { space } from "styled-system";
import theme from "./theme";

const size = props => {
  switch (props.size) {
    case "extraSmall":
      return {
        height: "16px",
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: "0 6px"
      };
    case "small":
      return {
        height: "32px",
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: "0 12px"
      };
    case "medium":
      return {
        height: "40px",
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "0 18px"
      };
    case "large":
      return {
        height: "48px",
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: "0 22px"
      };
    default:
      return {
        height: "40px",
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "0 18px"
      };
  }
};

const fullWidth = props => (props.fullWidth ? { width: "100%" } : null);

const backgroundColor = props =>
  props.backgroundColor ? props.backgroundColor : "blue";

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors[props.backgroundColor]};
  color: ${props => props.theme.colors.white};
  border-width: 1px;
  border-style: solid;
  border-color: props.theme.colors[props.bordercolor]

  &:disabled {
    opacity: 0.25;
  }

  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.backgroundColor};
  }

  ${fullWidth} ${size} ${space};
`;

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
]);

Button.propTypes = {
  /** Size */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  backgroundColor: PropTypes.string,
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
  py: numberStringOrArray
};

Button.defaultProps = {
  theme: theme,
  backgroundColor: "blue",
  borderColor: "transparent"
};

Button.displayName = "Button";

export default Button;
