import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Bottom = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TouchableOpacity style={[styles.bottomItem, styles.leftSubview]}>
					<View style={styles.center}>
						<Image source={require('src/assets/images/home.png')} style={styles.homeIcon} />
						<Text style={styles.iconLabel}>
							Home
						</Text>
					</View>
				</TouchableOpacity>

				<View style={[styles.bottomItem, styles.centralContainer]}>
					<TouchableOpacity style={styles.centralSubview}>
						<Image source={require('src/assets/images/w_banner.png')} style={styles.wBanner} />
					</TouchableOpacity>
				</View>

				<TouchableOpacity style={[styles.bottomItem, styles.rightSubview]}>
					<View style={styles.center}>
						<Image source={require('src/assets/images/more.png')} style={styles.homeIcon} />
						<Text style={styles.iconLabel}>
							More
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export { Bottom };
