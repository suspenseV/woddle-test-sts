import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	milestone: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 15,
		marginBottom: 20,
		overflow: 'hidden',
		alignSelf: 'center',
		borderWidth: 1,
		height: moderateVerticalScale(260, 0),
	},
	milestoneImage: {
		width: '100%',
		height: moderateVerticalScale(148, 0),
	},
	milestoneTextContainer: {
		paddingHorizontal: moderateScale(24),
		alignSelf: 'flex-start',
		paddingTop: moderateVerticalScale(12, 0.9),
	},
	milestoneTitle: {
		fontSize: scale(12),
		fontFamily: 'Roboto-Regular',
		color: '#000000',
		marginTop: 10,
	},
	milestoneValueContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'flex-end',
		width: '100%',
		marginBottom: 24,
	},
	milestoneValue: {
		fontSize: scale(32),
		fontFamily: 'Roboto-Light',
		color: '#000000',
		marginTop: moderateVerticalScale(11),
	},
	arrowButton: {},
	arrowIcon: {
		width: scale(33),
		height: scale(33),
	},
});

export default styles;
