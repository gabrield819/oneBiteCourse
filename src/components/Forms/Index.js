import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

import ImcResult from "./ImcResult";

function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [imcMessage, setImcMessage]= useState("preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2));
}

function validationImc() {
    if (weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setImcMessage("Seu IMC é igual: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setImcMessage("preencha o peso e altura")
}
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                    onChangeText={setHeight} 
                    value={height} 
                    placeholder="ex: 1.75" 
                    keyboardType="numeric" 
                />

                <Text>Peso</Text>
                <TextInput 
                    onChangeText={setWeight} 
                    value={weight} 
                    placeholder="ex: 75,350" 
                    keyboardType="numeric" 
                />

                <Button 
                    title={textButton} 
                    onPress={() => validationImc()}
                />

            </View>
            <ImcResult imcResultMessage={imcMessage} ImcResult={imc}/>
        </View>
    );
}
export default Form;