import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	adBanner: {
		alignItems: 'center',
		marginBottom: 20,
		marginTop: 12
	},
	adBannerImage: {
		width: '100%',
		height: moderateVerticalScale(76, 0),
		borderRadius: 15
	},
});

export default styles;
