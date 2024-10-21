import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const AdBanner = () => (
	<View style={styles.adBanner}>
		<Image
			source={require('src/assets/images/baby_banner.png')}
			style={styles.adBannerImage}
		/>
	</View>
);

export { AdBanner };
