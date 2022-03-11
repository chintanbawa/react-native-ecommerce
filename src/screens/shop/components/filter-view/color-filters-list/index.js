import React from 'react';

import {Box, FlatList, HStack, Text} from 'native-base';

export const ColorFiltersList = ({data, ...props}) => {
  const renderColorFilterItem = ({item, index}) => (
    <HStack key={item.id + index} w={'50%'} alignItems='center' mb={1}>
      <Box size={3} bgColor={item.colorCode} borderRadius={4} mr={1} />
      <Text fontSize='10px'>{item.colorName}</Text>
    </HStack>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderColorFilterItem}
      keyExtractor={(item, index) => item.id + index}
      numColumns={2}
      scrollEnabled={false}
      {...props}
    />
  );
};
