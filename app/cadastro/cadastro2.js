import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View> 
        <Image source={require('../../assets/Logo1.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Agora, mais alguns dados sobre você:</Text>
        <Text style={styles.subtitle}>CEP</Text>
        <TextInput style={styles.input} placeholder="Insira seu CEP" />
        <Text style={styles.subtitle1}>Endereço</Text>
        <TextInput style={styles.input} placeholder="Insira seu endereço" />
        <Text style={styles.subtitle2}>Número</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira seu número" />
        <Text style={styles.subtitle3}>Complemento</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira seu complemento" />
        <Text style={styles.subtitle1}>Telefone</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="(00) 00000-0000" />
        <View style={styles.buttonContainer}>
            <Link href={"/cadastro"} style={styles.buttonVoltar}>Voltar</Link>
        </View>
        <View style={styles.buttonContainer}>
            <Link href={"/cadastro/cadastro3"} style={styles.button}>Próximo</Link>
        </View>
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
    marginTop: 500,
  },
  logo: {
    width: 140,
    height: 142,
    marginTop: -500,
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
    height: 50,
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
    marginLeft: -335,
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    marginLeft: -290,
  },
  subtitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    marginLeft: -295,
  },
  subtitle3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    marginLeft: -245,
  },
  button: {
    width: 370,
    height: 50,
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
    marginTop: 0,

  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonVoltar: {
    width: 370,
    height: 50,
    backgroundColor: '#90989F',
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
    marginTop: 20,
  },  
});
