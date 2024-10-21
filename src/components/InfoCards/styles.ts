import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	cardsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 19,
		alignSelf: 'center',
	},
	card: {
		width: ((width - moderateScale(50, 0.9)) / 2),
		paddingVertical: 20,
		paddingLeft: moderateScale(24, 0.9),
		borderRadius: 15,
		marginBottom: 15,
	},
	cardTitle: {
		fontSize: scale(12),
		marginBottom: moderateVerticalScale(10),
		color: '#000000',
		fontFamily: 'Roboto-Regular',
	},
	cardValueContainer: {
		marginBottom: moderateVerticalScale(16),
	},
	cardValueNumber: {
		fontFamily: 'Roboto-Light',
		fontSize: scale(32),
		color: '#000',
	},
	cardValueText: {
		fontFamily: 'Roboto-Light',
		fontSize: scale(24),
		color: '#000',
	},
	cardDate: {
		fontFamily: 'Roboto-Regular',
		fontSize: scale(10),
		color: '#878585',
		marginTop: 'auto',
		alignSelf: 'flex-start',
	},
	cardWeight: {
		backgroundColor: '#FFF4DB',
	},
	cardDiaper: {
		backgroundColor: '#E9F1FF',
	},
	cardFeeding: {
		backgroundColor: '#FFEAE6',
	},
	cardSleep: {
		backgroundColor: '#F8E8FF',
	},
});

export default styles;
