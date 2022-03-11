import React, {useState} from 'react';
import {Box, Divider, FlatList, Image} from 'native-base';
import {FilterTagItem} from './filter-tag-item';

import FiltersIcon from 'assets/icons/filters.png';

export const FilterTagsList = ({data, ...props}) => {
  const [filterTag, setFilterTag] = useState('');
  const renderFilterTagItem = ({item, index}) => (
    <FilterTagItem
      key={item + index}
      item={item}
      filterTag={filterTag}
      onFilterTagPress={() => setFilterTag(item)}
    />
  );

  const ListHeader = () => (
    <Image source={FiltersIcon} size={10} mr={5} resizeMode='contain' />
  );

  const renderItemSeprator = () => (
    <Divider orientation='vertical' thickness={10} bgColor='#0000' />
  );

  const ListFooter = () => <Box w={10} />;

  return (
    <FlatList
      data={data}
      p={2}
      renderItem={renderFilterTagItem}
      keyExtractor={(item, index) => item + index}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={ListHeader}
      ItemSeparatorComponent={renderItemSeprator}
      ListFooterComponent={ListFooter}
      {...props}
    />
  );
};
