import { Image, View } from "react-native"
import styles from "./styles"
// @ts-ignore
import babyBannerImage from 'src/assets/images/baby_banner.png'

const AdBanner = () => {
	return (
		<View style={styles.adBanner}>
			<Image
				source={babyBannerImage}
				style={styles.adBannerImage}
			/>
		</View>
	)

}

export { AdBanner }