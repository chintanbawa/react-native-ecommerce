import React from 'react';
import {FlatList} from 'native-base';
import {CollectionItem} from './collection-item';

export const CollectionsList = ({data, ...props}) => {
  const renderCollectionItem = ({item, index}) => (
    <CollectionItem key={item.id + index} item={item} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderCollectionItem}
      keyExtractor={(item, index) => item.id + index}
      numColumns={2}
      {...props}
    />
  );
};
