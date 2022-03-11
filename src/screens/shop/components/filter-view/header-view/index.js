import React from 'react';

import {AddIcon, CloseIcon, HStack, Text} from 'native-base';

export const HeaderView = ({title, isExpanded}) => (
  <HStack justifyContent='space-between' alignItems='center' my={2}>
    <Text fontSize='md' bold>
      {title}
    </Text>
    {isExpanded ? <CloseIcon size={3} /> : <AddIcon size={3} />}
  </HStack>
);
