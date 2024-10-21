import React, { useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Slider } from 'src/components/Slider';
import { Header } from 'src/components/Header';
import { InfoCards } from 'src/components/InfoCards';
import { AdBanner } from 'src/components/AdBanner';
import { Milestone } from 'src/components/Milestone';
import { Bottom } from 'src/navigation';

import styles from './styles';


const BabyScreen = () => {
	const insets = useSafeAreaInsets();

	const [refreshing, setRefreshing] = useState<boolean>(false);

	const onRefresh = React.useCallback(() => {
    setRefreshing(true);
		// CALL PAGE ACTUAL DATA FROM BE
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

	useEffect(() => {
		onRefresh();
	}, [onRefresh]);

	return (
		<View style={[styles.flex, styles.container]}>
			<View style={[styles.content, {paddingTop: insets.top}]}>
				<ScrollView
					contentContainerStyle={[styles.contentContainer]}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
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
