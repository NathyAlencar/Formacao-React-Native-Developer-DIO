import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import batLogo from "./assets/batLogo.jpg";
import {useState}  from 'react'

export default function App() {
  const [showForm, setShowForm] = useState (false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    localizacao: '',
    observacao: ''
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    Alert.alert('Sinal enviado!', 'O Batman foi alertado!');
    toggleForm();
  };

  const toggleForm = ( )=> {
     setShowForm(!showForm);
    if (showForm) {
      // Reseta formulário
      setFormData({
        nome: '',
        telefone: '',
        localizacao: '',
        observacao: ''
      });
    }
  };

  return (
    <View style={styles.container}>
      {!showForm ? (
        <>
          <Image
            source={batLogo}
            style={styles.batlogo}
          />
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.button}>ACTIVATE BAT SIGNAL</Text>
          </TouchableOpacity>
        </>
      ) : (
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Image
            source={batLogo}
            style={styles.batIcon}
          />
            
            {/* Campo Nome */}
            <Text style={styles.inputLabel}>Nome completo</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Digite Aqui..."
              placeholderTextColor="#888"
              value={formData.nome}
              onChangeText={(text) => handleInputChange('nome', text)}
            />
            <Text style={styles.inputHint}>This is your hint</Text>

            {/* Campo Telefone */}
            <Text style={styles.inputLabel}>Telefone para contato</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Digite Aqui..."
              placeholderTextColor="#888"
              value={formData.telefone}
              onChangeText={(text) => handleInputChange('telefone', text)}
              keyboardType="phone-pad"
            />
            <Text style={styles.inputHint}>This is your hint</Text>

            {/* Campo Localização */}
            <Text style={styles.inputLabel}>Localização atual</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Digite Aqui..."
              placeholderTextColor="#888"
              value={formData.localizacao}
              onChangeText={(text) => handleInputChange('localizacao', text)}
            />
            
            {/* Campo Observações */}
            <Text style={styles.inputLabel}>Observações</Text>
            <TextInput
              style={[styles.inputField, styles.multilineInput]}
              placeholder="Digite Aqui..."
              placeholderTextColor="#888"
              value={formData.observacao}
              onChangeText={(text) => handleInputChange('observacao', text)}
              multiline
            />
          
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[styles.formButton, styles.cancelButton]}
              onPress={toggleForm}
            >
              <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.formButton, styles.submitButton]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>ENVIAR SINAL</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )};
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formScreenContainer: {
    flex: 1,
    width: '100%',
  },
  batlogo: {
    width: 300,
    height: 350,
    marginBottom: 30,
  },
  batIcon: {
    width: 80,
    height: 90,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'left',
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  inputField: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 4,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputHint: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  
  button: {
    fontSize: 18,
    backgroundColor: '#333',
    color: '#FFD700',
    borderRadius: 8,
    padding: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  formContainer: {
    padding: 20,
    paddingTop: 40,
  },
  input: {
    width: '100%',
    marginHorizontal: 0,
    backgroundColor: '#fff',
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  formButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#555',
  },
  submitButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});

