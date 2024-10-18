import React, { useRef, useState } from 'react';
import { View, Image, Text, Animated, Dimensions } from 'react-native';
import _, { head } from 'lodash';

import styles from './styles';
import { moderateScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

// @ts-ignore
import sexIcon from 'src/assets/images/sex.png'

const SLIDES_DATA = [
	{
		key: 1,
		description: 'Christian Bowen',
		image: require('src/assets/images/baby.png'),
		year: '1y 2m',
		icon: sexIcon
	},
	{
		key: 2,
		description: 'Christian Bowen Older',
		image: require('src/assets/images/baby.png'),
		year: '2y 5m',
		icon: sexIcon
	},
	{
		key: 3,
		description: 'Christian Bowen II',
		image: require('src/assets/images/baby.png'),
		year: '1y, 3m',
		icon: sexIcon
	},
];

const descriptionHeight = moderateScale(54, 1.1);

const inputRange = SLIDES_DATA.map((item, i) => i * (width - moderateScale(16, 0.9) * 2));
const sliderWidth = width - moderateScale(16, 0.9) * 2;

// @ts-ignore
const Indicator = ({ index, scrollX }) => {
	const outputRangeBorder = SLIDES_DATA.map((item, i) => (i === index ? 0 : 1.2));
	const outputRangeBackground = SLIDES_DATA.map((item, i) => (i === index ? '#000' : 'transparent'));

	const borderWidth = scrollX.interpolate({
		inputRange,
		outputRange: outputRangeBorder,
	});

	const backgroundColor = scrollX.interpolate({
		inputRange,
		outputRange: outputRangeBackground,
	});

	return (
		<Animated.View style={[styles.indicator, { borderWidth, backgroundColor }]} />
	);
};

// @ts-ignore
const Indicators = ({ scrollX, activeIndex }) => {
	return (
		<View style={styles.indicatorsRow}>
			{SLIDES_DATA.map((item, index) => {
				return (
					<Indicator
						key={item.key}
						index={index}
						scrollX={scrollX}
					/>
				);
			})}
		</View>
	);
};

// @ts-ignore
const Description = ({ scrollX }) => {
	const translateY = scrollX.interpolate({
		inputRange,
		outputRange: SLIDES_DATA.map((i, index) => -(index * descriptionHeight)),
		// outputRange: [0, 0, 0],
	});

	return (
		<View style={{ position: 'absolute', overflow: 'hidden', top: 10, left: 10, height: descriptionHeight, backgroundColor: '#F3F7FAB2', borderRadius: 23, paddingHorizontal: 12, paddingVertical: 12 }}>
			{SLIDES_DATA.map((item, index) => {
				return (
					<Animated.View key={item.key} style={[{ height: descriptionHeight, width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }, { transform: [{ translateY }] }]}>
						<Image source={item.icon} style={styles.sexIcon} />
						<Text style={styles.babyName}>{item.description}</Text>
						<Text style={styles.babyAge}>{item.year}</Text>
					</Animated.View>
				);
			})}
		</View>
	);
};

const Slider = () => {
	const scrollX = useRef(new Animated.Value(0)).current;
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const onViewableItemsChanged = ({
		changed,
	}: {
		changed: Array<{ index: number; isViewable: boolean }>;
	}) => {
		const currentIndex = _.findIndex(changed, c => c.isViewable);
		if (currentIndex > -1) {
			setActiveIndex(changed[currentIndex]?.index);
		}
	};

	// @ts-ignore
	const renderItem = ({ item, index }) => {
		const opacity = scrollX.interpolate({
			inputRange,
			outputRange: SLIDES_DATA.map((el, i) => (i === index ? 1 : 0.4)),
		});
		const scale = scrollX.interpolate({
			inputRange,
			outputRange: SLIDES_DATA.map((el, i) => (i === index ? 1 : 0.9)),
		});

		return (
			<Animated.View style={[styles.fullHeight, { width: sliderWidth, opacity, transform: [{ scale }] }]}>
				<Image source={item.image} style={[styles.fullHeight, styles.sliderImage]} />
			</Animated.View>
		);
	};

	return (
		<View style={styles.container}>
			<Animated.FlatList
				data={SLIDES_DATA}
				bounces={false}
				renderItem={renderItem}
				horizontal
				// @ts-ignore
				onViewableItemsChanged={onViewableItemsChanged}
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false },
				)}
			/>
			<Description scrollX={scrollX} />
			<Indicators scrollX={scrollX} activeIndex={activeIndex} />
		</View>
	);
};

export { Slider };
