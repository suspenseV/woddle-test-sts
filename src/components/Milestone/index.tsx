import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
// @ts-ignore
import milestoneImage from 'src/assets/images/milestone.png';
// @ts-ignore
import arrowImage from 'src/assets/images/arrow.png'

const Milestone = () => {
	return (
		<View style={styles.milestone}>
			<Image
				source={milestoneImage}
				style={styles.milestoneImage}
			/>
			<View style={styles.milestoneTextContainer}>
				<Text style={styles.milestoneTitle}>Milestones</Text>
				<View style={styles.milestoneValueContainer}>
					<Text style={styles.milestoneValue}>Month 12</Text>
					<TouchableOpacity activeOpacity={0.8} style={styles.arrowButton}>
						<Image
							source={arrowImage}
							style={styles.arrowIcon}
						/>
					</TouchableOpacity>
				</View>
			</View>

		</View>
	)

}

export { Milestone }