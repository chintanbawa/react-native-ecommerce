import React from 'react';
import {Box, FlatList} from 'native-base';
import {FeaturedItem} from './fetaured-item';

export const FeaturedList = ({data, ...props}) => {
  const renderFeatureItem = ({item, index}) => (
    <FeaturedItem key={item + '' + index} item={item} />
  );

  const ListFooter = () => <Box w={6} />;

  return (
    <FlatList
      data={data}
      renderItem={renderFeatureItem}
      keyExtractor={(item, index) => item + '' + index}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={ListFooter}
      {...props}
    />
  );
};
