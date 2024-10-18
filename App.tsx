import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BabyScreen from 'src/screens/BabyScreen';

const App = () => {
	return (
		<SafeAreaProvider>
			<BabyScreen />
		</SafeAreaProvider>
	);
};

export default App;