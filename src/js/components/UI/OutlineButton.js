import styled from "react-emotion";
import PropTypes from "prop-types";
import { color } from "styled-system";
import Button from "./Button";
import theme from "./theme";

const OutlineButton = styled(Button)`
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  color: ${props => props.theme.colors.blue};
  border-color: ${props => props.theme.colors.blue};

  &:hover {
    color: ${props => (props.disabled ? null : props.theme.colors.darkBlue)};
    border-color: ${props =>
      props.disabled ? null : props.theme.colors.darkBlue};
    background-color: transparent;
  }
`;

OutlineButton.defaultProps = {
  theme: theme
};

OutlineButton.displayName = "OutlineButton";

export default OutlineButton;
