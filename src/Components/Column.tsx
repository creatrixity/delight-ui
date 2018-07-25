import * as React from 'react';
import styled from 'styled-components';
import { Box } from 'reakit';

import { computeColumnWidth } from '@Utilities';

type ColumnProps = {
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  gutterWidth?: string,
  style?: React.CSSProperties
};

export const Column:React.FC<ColumnProps> = (props) => {
  const { sm, md, lg, xl, gutterWidth, children, style } = props;

  const Col = styled(Box)`
    padding-left: ${gutterWidth};
    padding-right: ${gutterWidth};
    width: 100%;

    @media (min-width: 576px) {
      ${sm && computeColumnWidth(sm)};
    }

    @media (min-width: 768px) {
      ${md && computeColumnWidth(md)};
    }

    @media (min-width: 992px) {
      ${lg && computeColumnWidth(lg)};
    }

    @media only screen and (min-width: 1200px) {
      ${xl && computeColumnWidth(xl)};
    }
  `;

  return <Col style={style}>{children}</Col>
}

Column.defaultProps = {
  gutterWidth: '16px'
}