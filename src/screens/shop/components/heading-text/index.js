import React from 'react';
import {Text} from 'native-base';

export const HeadingText = ({...props}) => {
  return (
    <Text fontSize='xl' fontWeight={400} ml={4} {...props}>
      {props.children}
    </Text>
  );
};
