import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Slider } from 'src/components/Slider';
import { Header } from 'src/components/Header';
import { InfoCards } from 'src/components/InfoCards';
import { AdBanner } from 'src/components/AdBanner';
import { Bottom } from 'src/navigation';

import styles from './styles';
import { Milestone } from 'src/components/Milestone';


const BabyScreen = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={[styles.flex, styles.container]}>
			<View style={[styles.content]}>
				<ScrollView contentContainerStyle={[styles.contentContainer, {paddingTop: insets.top}]} showsVerticalScrollIndicator={false} >
					<Header />
					<Slider />
					<InfoCards />
					<AdBanner />
					<Milestone />
				</ScrollView>
			</View>
			<Bottom />
		</View>
	);
};

export default BabyScreen;
