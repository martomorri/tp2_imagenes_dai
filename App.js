import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.image}></Image>
      <Text style={styles.text}>Try some of our most popular flavours!</Text>
      <Card style={styles.card}></Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    resizeMode: 'contain',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    marginTop: 50,
    width: 300,
    height: 150
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
