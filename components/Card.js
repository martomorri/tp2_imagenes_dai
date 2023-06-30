import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

function Card() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/mocha.jpeg')} style={styles.image}></Image>
            <Text style={styles.text}>Mocha</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 30,
      },
      image: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: 330,
        height: 300,
      },
      text: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
      },
});

export default Card;