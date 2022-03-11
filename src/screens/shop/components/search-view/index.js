import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {Box, SearchIcon, Pressable, CloseIcon, Input} from 'native-base';
import Animated, {Easing, timing, useValue} from 'react-native-reanimated';

const inputTextWidth = Dimensions.get('window').width * 0.78;

export const SearchView = () => {
  const width = useValue(0);

  const [showSearch, setShowSearch] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    if (showSearch) setShowBorder(true);

    timing(width, {
      toValue: showSearch ? inputTextWidth : 0,
      duration: 160,
      easing: Easing.linear
    }).start(() => {
      if (!showSearch) setShowBorder(false);
    });
  }, [showSearch]);

  return (
    <>
      <Pressable onPress={() => setShowSearch(!showSearch)}>
        <Box
          bgColor='#EBEBEB'
          size={10}
          shadow={3}
          borderRadius={10}
          alignItems='center'
          justifyContent='center'
        >
          {showSearch ? <CloseIcon size={4} /> : <SearchIcon size={5} />}
        </Box>
      </Pressable>

      <Animated.View position='absolute' style={{width: width}}>
        <Input
          bgColor='white'
          py={2}
          w='100%'
          fontSize='md'
          borderWidth={showBorder ? 2 : 0}
          InputLeftElement={<SearchIcon size={4} ml={2} />}
          placeholder='Enter search'
        />
      </Animated.View>
    </>
  );
};
