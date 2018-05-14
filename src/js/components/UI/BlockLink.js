import styled from "react-emotion";
import Link from "./Link";

const BlockLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

BlockLink.displayName = "BlockLink";

export default BlockLink;
