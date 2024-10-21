import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Header = () => (
	<View style={styles.header}>
		<Text style={styles.title}>Woddle</Text>
		<View style={styles.headerRight}>
			<TouchableOpacity style={styles.notificationIcon}>
				<Image
					source={require('src/assets/images/notifications.png')}
					style={styles.notifications}
				/>
			</TouchableOpacity>
			<Image
				source={require('src/assets/images/portrait.png')}
				style={styles.avatar}
			/>
		</View>
	</View>
);

export { Header };
