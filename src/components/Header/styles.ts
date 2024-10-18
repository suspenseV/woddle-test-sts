import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
	},
	title: {
		fontSize: scale(40),
		fontFamily: 'Ribeye-Regular',
		color: '#000'
	},
	headerRight: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	notificationIcon: {
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	notifications: {
		width: 31,
		height: 26,
	},
	avatar: {
		width: moderateScale(30, 0.9),
		height: moderateScale(30, 0.9),
		borderRadius: 60,
	},
});

export default styles;
