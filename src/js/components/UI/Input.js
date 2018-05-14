import styled, { keyframes } from "react-emotion";
import { space, theme, propTypes } from "styled-system";
import PropTypes from "prop-types";
import defaultTheme from "./theme";

const borders = ({ color, theme }) => {
  const borderColor = color ? theme.colors[color] : theme.colors.borderGray;
  const focusColor = color ? borderColor : theme.colors.blue;
  return {
    "border-color": borderColor,
    "box-shadow": `0 0 0 1px ${borderColor}`,
    ":focus": {
      outline: 0,
      "border-color": focusColor,
      "box-shadow": `0 0 0 2px ${focusColor}`
    }
  };
};

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  height: 35px;
  font-family: inherit;
  color: inherit;
  font-size: ${theme("fontSizes.1")}px;
  background-color: transparent;
  border-radius: ${theme("radius")};
  border-width: 0px;
  border-style: solid;
  border-color: ${theme("colors.borderGray")};

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: ${theme("colors.gray")};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space};
`;

Input.displayName = "Input";
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  mt: PropTypes.number,
  ...propTypes.borders,
  ...propTypes.space
};

Input.defaultProps = {
  theme: defaultTheme
};

export default Input;
