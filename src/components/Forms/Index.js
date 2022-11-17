import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import ImcResult from "./ImcResult";

function Form() {
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="ex: 1.75" keyboardType="numeric" />
                <Text>Peso</Text>
                <TextInput placeholder="ex: 75,350" keyboardType="numeric" />
                <Button title="Calcular IMC" onPress={()=>{console.log("CLICOU")}}/>
            </View>
            {/* Vai continuar na próxima aula. */}
            {/* <ImcResult imcResultMessage={imcMessage} ImcResult={imc}/> */}
        </View>
    );
}
export default Form;