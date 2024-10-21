import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const lightStyles = (text: string) => <Text style={styles.cardValueText}>{text}</Text>;

const InfoCards = () => (
	<View style={styles.cardsContainer}>
		<View style={[styles.card, styles.cardWeight]}>
			<Text style={styles.cardTitle}>Weight</Text>
			<View style={styles.cardValueContainer}>
				<Text style={styles.cardValueNumber}>15{lightStyles('lbs')}</Text>
				<Text style={styles.cardValueNumber}>3 {lightStyles('oz')}</Text>
			</View>
			<Text style={styles.cardDate}>1:00 PM Dec 05 2023</Text>
		</View>

		<View style={[styles.card, styles.cardDiaper]}>
			<Text style={styles.cardTitle}>Diaper</Text>
			<View style={styles.cardValueContainer}>
				<Text style={styles.cardValueNumber}>Pee</Text>
				<Text style={styles.cardValueNumber}>Medium</Text>
			</View>
			<Text style={styles.cardDate}>2h 55m ago</Text>
		</View>

		<View style={[styles.card, styles.cardFeeding]}>
			<Text style={styles.cardTitle}>Feeding</Text>
			<View style={styles.cardValueContainer}>
				<Text style={styles.cardValueNumber}>Formula</Text>
				<Text style={styles.cardValueNumber}>5{lightStyles('oz')}</Text>
			</View>
			<Text style={styles.cardDate}>2h 30m ago</Text>
		</View>

		<View style={[styles.card, styles.cardSleep]}>
			<Text style={styles.cardTitle}>Sleep</Text>
			<View style={styles.cardValueContainer}>
				<Text style={styles.cardValueNumber}>2{lightStyles('h')} 20{lightStyles('m')}</Text>
			</View>
			<Text style={styles.cardDate}>3h 35m ago</Text>
		</View>
	</View>
);

export { InfoCards };
