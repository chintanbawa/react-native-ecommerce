import {Box, Heading, Text} from 'native-base';
import React from 'react';

export const SaleView = ({...props}) => {
  return (
    <Box bgColor='#70DDC0' p={4} {...props}>
      <Box bgColor='#990001' alignSelf='center' px={5}>
        <Heading fontSize='8xl' color='white'>
          SALE
        </Heading>
      </Box>
    </Box>
  );
};
