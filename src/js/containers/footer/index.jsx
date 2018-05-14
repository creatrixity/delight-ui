import React from "react";
import { connect } from "react-redux";
import GlobalFooter from "../../components/navigation/GlobalFooter";

class Footer extends React.PureComponent {
  render() {
    return (
      <div>
        <GlobalFooter />
      </div>
    );
  }
}

export default Footer;
