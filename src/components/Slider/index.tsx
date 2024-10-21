import React, { useRef } from 'react';
import { View, Image, Text, Animated, Dimensions, ImageSourcePropType } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles';

const { width } = Dimensions.get('window');

const SLIDES_DATA = [
	{
		key: 1,
		description: 'Christian Bowen',
		image: require('src/assets/images/baby.png'),
		year: '1y 2m',
		icon: require('src/assets/images/sex.png'),
	},
	{
		key: 2,
		description: 'Christian Bowen Older',
		image: require('src/assets/images/baby.png'),
		year: '2y 5m',
		icon: require('src/assets/images/sex.png'),
	},
	{
		key: 3,
		description: 'Christian Bowen II',
		image: require('src/assets/images/baby.png'),
		year: '1y, 3m',
		icon: require('src/assets/images/sex.png'),
	},
];

const descriptionHeight = moderateScale(54, 1.1);

const inputRange = SLIDES_DATA.map((item, i) => i * (width - moderateScale(16, 0.9) * 2));
const sliderWidth = width - moderateScale(16, 0.9) * 2;

interface IndicatorProps {
	index: number;
	scrollX: Animated.Value;
}

interface IndicatorsProps {
	scrollX: Animated.Value;
}

interface ISliderItem {
	key: number;
	description: string;
	image: ImageSourcePropType;
	year: string;
	icon: string;
}

interface RenderItemProps {
	item: ISliderItem;
	index: number;
}

const Indicator = ({ index, scrollX }: IndicatorProps) => {
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

const Indicators = ({ scrollX }: IndicatorsProps) => {
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

const Description = ({ scrollX }: IndicatorsProps) => {
	const translateY = scrollX.interpolate({
		inputRange,
		outputRange: SLIDES_DATA.map((i, index) => -(index * descriptionHeight)),
	});

	return (
		<View style={[styles.descriptionContainer, { height: descriptionHeight }]}>
			{SLIDES_DATA.map((item) => {
				return (
					<Animated.View key={item.key} style={[styles.descriptionSubContainer, { height: descriptionHeight, transform: [{ translateY }] }]}>
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

	const renderItem = ({ item, index }: RenderItemProps) => {
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
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false },
				)}
			/>
			<Description scrollX={scrollX} />
			<Indicators scrollX={scrollX} />
		</View>
	);
};

export { Slider };
