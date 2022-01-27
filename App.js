import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native';

let { height, width } = Dimensions.get('screen');

export default function App() {
	return (
		<SafeAreaView>
			<Text>Hello World</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
