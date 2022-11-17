import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native";

import ImcResult from "./ImcResult";
import styles from "./styles";

function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [imcMessage, setImcMessage]= useState("preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [erroMessage, setErrorMessage] = useState(null)

function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2));
}

function verificationImc(){
    if(imc == null) {
        Vibration.vibrate()
        setErrorMessage("campo obrigatório * ")
    }
}
function validationImc() {
    if (weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setImcMessage("Seu IMC é igual a: ")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
        return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setImcMessage("preencha o peso e altura")
    
}
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight} 
                    value={height} 
                    placeholder="ex: 1.75" 
                    keyboardType="numeric" 
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={setWeight} 
                    value={weight} 
                    placeholder="ex: 75,350" 
                    keyboardType="numeric" 
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc() }
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            <ImcResult imcResultMessage={imcMessage} ImcResult={imc}/>
        </View>
    );
}
export default Form;