import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  Box,
  Checkbox,
  CloseIcon,
  Pressable,
  ScrollView,
  Text
} from 'native-base';
import Animated, {
  Easing,
  interpolateColors,
  timing,
  useValue
} from 'react-native-reanimated';
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from 'accordion-collapse-react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {HeaderView} from './header-view';
import {ColorFiltersList} from './color-filters-list';

import {sortByFilters} from 'data/sortby-filters';
import {colorsFilters} from 'data/color-filters';

const screenWidth = Dimensions.get('window').width;
const filterViewWidth = screenWidth * 0.7;
const borderRadius = 15;

const SortByItem = ({name}) => <Checkbox mb={1}>{name}</Checkbox>;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const FilterView = ({open, onClosePress, ...props}) => {
  const width = useValue(0);

  const [expandedSections, setExpandedSections] = useState([]);

  useEffect(() => {
    timing(width, {
      toValue: open ? filterViewWidth : 0,
      duration: 150,
      easing: Easing.linear
    }).start(() => {
      if (open) {
        setExpandedSections([...expandedSections, 1]);
      } else {
        setExpandedSections([]);
      }
    });
  }, [open]);

  const backgroundColor = interpolateColors(width, {
    inputRange: [0, width],
    outputColorRange: ['#0000', '#0001']
  });

  const handleTogglePress = (isExpanded, sectionPosition) => {
    if (isExpanded) {
      setExpandedSections([...expandedSections, sectionPosition]);
    } else {
      setExpandedSections(
        expandedSections.filter(item => item !== sectionPosition)
      );
    }
  };

  return (
    <AnimatedBox
      position='absolute'
      w='100%'
      h='100%'
      style={{backgroundColor, zIndex: 99}}
      pointerEvents={open ? 'auto' : 'none'}
      shadow={5}
      {...props}
    >
      <Animated.View
        style={{
          width,
          height: '100%',
          backgroundColor: '#F6F7FD',
          overflow: 'hidden',
          borderTopRightRadius: borderRadius,
          borderBottomRightRadius: borderRadius
        }}
      >
        <Box p={4}>
          <Pressable
            onPress={onClosePress}
            alignSelf='flex-end'
            mb={2}
            flexDirection='row'
            alignItems='center'
            borderBottomWidth={1}
            borderBottomColor='blue.700'
          >
            <Text mr={1.5} fontSize='15px' color='blue.700'>
              Close Filters
            </Text>
            <CloseIcon size={3} color='blue.700' />
          </Pressable>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Collapse
              isExpanded={expandedSections.includes(1)}
              onToggle={isExpanded => handleTogglePress(isExpanded, 1)}
            >
              <CollapseHeader>
                <HeaderView
                  title='SORT BY'
                  isExpanded={expandedSections.includes(1)}
                />
              </CollapseHeader>
              <CollapseBody>
                {sortByFilters.map((filter, index) => (
                  <SortByItem key={filter + index} name={filter} />
                ))}
              </CollapseBody>
            </Collapse>

            <Collapse
              isExpanded={expandedSections.includes(2)}
              onToggle={isExpanded => handleTogglePress(isExpanded, 2)}
            >
              <CollapseHeader>
                <HeaderView
                  title='Price'
                  isExpanded={expandedSections.includes(2)}
                />
              </CollapseHeader>
              <CollapseBody>
                <Box alignItems='center' mt={10}>
                  <MultiSlider
                    sliderLength={filterViewWidth - 70}
                    values={[10.0, 2000.0]}
                    min={10}
                    max={2000}
                    step={1}
                    valuePrefix='160'
                    valueSuffix='2000'
                    enableLabel
                  />
                </Box>
              </CollapseBody>
            </Collapse>

            <Collapse
              isExpanded={expandedSections.includes(3)}
              onToggle={isExpanded => handleTogglePress(isExpanded, 3)}
            >
              <CollapseHeader>
                <HeaderView
                  title='Brand'
                  isExpanded={expandedSections.includes(3)}
                />
              </CollapseHeader>
              <CollapseBody>
                <Text>Brand Filter Goes Here...</Text>
              </CollapseBody>
            </Collapse>

            <Collapse
              isExpanded={expandedSections.includes(4)}
              onToggle={isExpanded => handleTogglePress(isExpanded, 4)}
            >
              <CollapseHeader>
                <HeaderView
                  title='Color'
                  isExpanded={expandedSections.includes(4)}
                />
              </CollapseHeader>
              <CollapseBody>
                <ColorFiltersList data={colorsFilters} />
              </CollapseBody>
            </Collapse>

            <Collapse
              isExpanded={expandedSections.includes(5)}
              onToggle={isExpanded => handleTogglePress(isExpanded, 5)}
            >
              <CollapseHeader>
                <HeaderView
                  title='Size'
                  isExpanded={expandedSections.includes(5)}
                />
              </CollapseHeader>
              <CollapseBody>
                <Text>Size Filter Goes Here...</Text>
              </CollapseBody>
            </Collapse>
            <Box h={20} />
          </ScrollView>
        </Box>
      </Animated.View>
    </AnimatedBox>
  );
};
