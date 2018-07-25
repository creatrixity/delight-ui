import * as React from 'react';
import { Box } from 'reakit';
import { theme } from '@Config';
import { Icon } from '@Components';

type VerificationMarkProps = {}

export const VerificationMark:React.FC<VerificationMarkProps> = () => {
  return (
    <Box
      borderRadius={'50%'}
      background={theme.palette.blue[6]}
      width={'24px'}
      height={'24px'}
      position={'relative'}
      data-testid = {'verification-mark'}
    >
      <Box
        position={'absolute'}
        top={'75%'}
        left={'50%'}
        transform={'translate(-50%, -70%)'}
      >
        <Icon name="check" fill={theme.palette.blue[1]} />
      </Box>
    </Box>
  )
}
