import {Box, FlatList, Heading, HStack, Text} from 'native-base';
import React from 'react';

export const ClientInfo = () => {
  return (
    <HStack bgColor='#70DFC1' py={1} px={3} alignItems='center' shadow={2}>
      <Box flex={1}>
        <Heading size='md'>KUMAR'S</Heading>
        <Text fontSize='md'>Farmington, IA</Text>
      </Box>
      <Box alignItems='center'>
        <Text fontSize='lg'>Open</Text>
        <Text fontSize='md'>until 9:00pm</Text>
      </Box>
    </HStack>
  );
};
