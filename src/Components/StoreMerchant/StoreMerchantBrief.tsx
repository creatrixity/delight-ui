import * as React from 'react';

import { Box, Heading } from 'rebass';
import {
  Col,
  Row,
  Grid
} from '@Components';
import { theme } from '@Config';

type StoreMerchantBriefProps = {};

export const StoreMerchantBrief:React.FC<StoreMerchantBriefProps> = ({ }) => {
  return (
    <Box padding={`${theme.space[0]} 0`}>
      <Grid>
        <Row>
          <Col>
            <Heading
              use="h4"
              margin={`${theme.space[1]} 0`}
              color={theme.palette.grayscale[2]}
              data-testid={'store-merchandise-screen-title'}
            >
              Kilimanjaro, Choba
            </Heading>
          </Col>
        </Row>
      </Grid>
    </Box>
  )
}