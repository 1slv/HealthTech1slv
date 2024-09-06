import { View, Text, StyleSheet, Image } from "react-native";

export default function Compras() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Logo2.png')} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#f5fcff',
    },
    logo: {
        width: 140,
        height: 142,
        marginLeft: 100
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    botao: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#121212',
        padding: 20,
        borderRadius: 20,
        width: '80%'
    }
})