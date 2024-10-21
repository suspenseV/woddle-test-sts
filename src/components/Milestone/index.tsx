import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Milestone = () => (
	<View style={styles.milestone}>
		<Image
			source={require('src/assets/images/milestone.png')}
			style={styles.milestoneImage}
		/>
		<View style={styles.milestoneTextContainer}>
			<Text style={styles.milestoneTitle}>Milestones</Text>
			<View style={styles.milestoneValueContainer}>
				<Text style={styles.milestoneValue}>Month 12</Text>
				<TouchableOpacity activeOpacity={0.8} style={styles.arrowButton}>
					<Image
						source={require('src/assets/images/arrow.png')}
						style={styles.arrowIcon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

export { Milestone };
