import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		width,
		position: 'absolute',
		bottom: 0,
		left: 0,
		justifyContent: 'flex-end',
		backgroundColor: 'transparent',
		height: moderateVerticalScale(113, 0.9),
	},
	row: {
		width,
		height: moderateVerticalScale(118, 0.9) / 3 * 2,
		backgroundColor: '#FEF9F5',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	bottomItem: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	homeIcon: {
		width: moderateScale(32, 0.9),
		height: moderateScale(32, 0.9),
	},
	center: {
		alignItems: 'center',
	},
	iconLabel: {
		lineHeight: 24,
		fontSize: 12,
		fontWeight: '600',
	},
	leftSubview: {
		alignItems: 'flex-end',
	},
	rightSubview: {
		alignItems: 'flex-start',
	},
	centralSubview: {
		backgroundColor: '#FEF9F5',
		justifyContent: 'center',
		alignItems: 'center',
		width: moderateScale(110, 0.9),
		height: moderateScale(110, 0.9),
		borderRadius: 100,
	},
	wBanner: {
		width: moderateScale(92, 0.9),
		height: moderateScale(92, 0.9),
	},
	centralContainer: {
		flex: 1,
		marginTop: -moderateScale(92, 0.9) / 2,
	},
});

export default styles;
