import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Checkbox } from 'expo-checkbox';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/Logo1.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Selecione os planos:</Text>
      
      {/* Exemplo de como utilizar a Checkbox corretamente */}
      <View style={styles.checkboxContainer1}>
        <Checkbox />
        <Text style={styles.checkboxLabel}>Sulamerica</Text>
      </View>

      <View style={styles.checkboxContainer2}>
        <Checkbox />
        <Text style={styles.checkboxLabel}>Unimed</Text>
      </View>

      <View style={styles.checkboxContainer3}>
        <Checkbox />
        <Text style={styles.checkboxLabel}>Bradesco</Text>
      </View>

      <View style={styles.checkboxContainer4}>
        <Checkbox />
        <Text style={styles.checkboxLabel}>Amil</Text>
      </View>

      <View style={styles.checkboxContainer5}>
        <Checkbox />
        <Text style={styles.checkboxLabel}>Biovida</Text>
      </View>   
    
        <View style={styles.checkboxContainer6}>
        <Checkbox />
        <Text style={styles.checkboxLabel}>Outros</Text>
    </View>

    <View style={styles.checkboxContainer7}>
        <Checkbox />
        <Text style={styles.checkboxLabel}>Não tenho plano de saúde</Text>
    </View>
      {/* Repita o bloco para os demais planos */}

      <View style={styles.buttonContainer}>
        <Link href={"/cadastro/cadastro2"} style={styles.buttonVoltar}>Voltar</Link>
      </View>
      <View style={styles.buttonContainer}>
        <Link href={"/boavindas"} style={styles.button}>Concluir</Link>
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
    marginTop: 550,
  },
  logo: {
    width: 140,
    height: 142,
    marginTop: -600,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: -175,
    marginTop: -350,
  },
  checkboxContainer1: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: -258
  },
  checkboxContainer2: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: -282,
  },
  checkboxContainer3: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: -270,
  },
  checkboxContainer4: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: -306,
  },
  checkboxContainer5: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: -285,
  },
  checkboxContainer6: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: -289,
  },
  checkboxContainer7: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: -150,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    width: 370,
    height: 50,
    backgroundColor: '#0B3B60',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonVoltar: {
    width: 370,
    height: 50,
    backgroundColor: '#90989F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    marginTop: 60,
  },
});
