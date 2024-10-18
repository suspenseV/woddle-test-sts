import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
// @ts-ignore
import portrait from 'src/assets/images/portrait.png';
// @ts-ignore
import notifications from 'src/assets/images/notifications.png';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Woddle</Text>
			<View style={styles.headerRight}>
				<TouchableOpacity style={styles.notificationIcon}>
					<Image
						source={notifications}
						style={styles.notifications}
					/>
				</TouchableOpacity>
				<Image
					source={portrait}
					style={styles.avatar}
				/>
			</View>
		</View>
	)

}

export { Header }