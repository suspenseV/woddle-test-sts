import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: (width - moderateScale(16, 0.9)) * 0.63,
		borderRadius: 23,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	fullHeight: {
		height: '100%',
	},
	sliderImage: {
		width: width - moderateScale(16, 0.9) * 2,
		borderRadius: 23,
	},
	indicatorsRow: {
		left: 0,
		width: width - moderateScale(16, 0.9) * 2,
		bottom: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	indicator: {
		width: moderateScale(10, 1.2),
		height: moderateScale(10, 1.2),
		borderRadius: 50,
		borderColor: 'black',
		marginHorizontal: 3,
	},
	babyName: {
		color: '#363636',
		fontSize: scale(14),
		fontFamily: 'Cabin-Bold',
		marginRight: 27
	},
	babyAge: {
		color: '#363636',
		fontSize: scale(14),
		fontFamily: 'Cabin-Regular'
	},
	sexIcon: {
		width: scale(12),
		height: verticalScale(12),
		marginTop: verticalScale(3),
		position: "absolute",
		right: 0,
		top: 0
	},
});

export default styles;
