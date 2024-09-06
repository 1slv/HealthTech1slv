import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View> 
        <Image source={require('../../assets/Logo1.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Insira seus dados básicos:</Text>
        <Text style={styles.subtitle}>Nome</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome completo" />
        <Text style={styles.subtitle}>Email</Text>
        <TextInput style={styles.input} placeholder="Insira seu endereço de email" />
        <Text style={styles.subtitle1}>Cria uma senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira sua senha" />
        <Text style={styles.subtitle1}>Repita a senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira sua senha" />
        <Link href=" /cadastro2">
            <View style={styles.buttonContainer}>
                <Link href={"/cadastro/cadastro2"} style={styles.button}>Próximo</Link>
            </View>
        </Link>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: 520,
  },
  logo: {
    width: 140,
    height: 142,
    marginTop: -550,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -350,
  },
  input: {
    width: 370,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    marginLeft: -320,
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    marginLeft: -230,
  },
  button: {
    width: 370,
    height: 60,
    backgroundColor: '#0B3B60',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    borderRadius: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    marginTop: 50,

  },
  buttonContainer: {
    marginTop: 20,
  },
});
