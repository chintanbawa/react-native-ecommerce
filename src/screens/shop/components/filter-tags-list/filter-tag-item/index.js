import React from 'react';
import {Pressable, Box, Text} from 'native-base';

export const FilterTagItem = ({item, filterTag, onFilterTagPress}) => {
  return (
    <Pressable onPress={onFilterTagPress}>
      <Box
        w={100}
        h={10}
        borderRadius={10}
        bgColor={item === filterTag ? '#8B9DC3' : '#EDF5FD'}
        alignItems='center'
        justifyContent='center'
        shadow={2}
      >
        <Text>{item}</Text>
      </Box>
    </Pressable>
  );
};
