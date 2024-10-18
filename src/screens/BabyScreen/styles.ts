import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	container: {
		backgroundColor: '#fff',
	},
	content: {
		paddingHorizontal: moderateScale(16, 0.9),
	},
	contentContainer: {
		paddingBottom: moderateVerticalScale(120, 0.9),
	},
});

export default styles;
