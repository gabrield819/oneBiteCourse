import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";

import ImcResult from "./ImcResult";
import styles from "./styles";

function Form() {

const [altura, setAltura]= useState(null)
const [peso, setPeso]= useState(null)
const [imcMessage, setImcMessage]= useState("preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [erroMessage, setErrorMessage] = useState(null)
const [imcList, setImcList] = useState([])

function imcCalculator() {
    let alturaFormat = altura.replace(",",".");
    let totalImc = (peso/(alturaFormat * alturaFormat)).toFixed(2);
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc }]);
    setImc(totalImc);
}

function verificationImc(){
    if(imc == null) {
        Vibration.vibrate()
        setErrorMessage("campo obrigatório * ")
    }
}
function validationImc() {
    // console.log(imcList)
    if (peso != null && altura != null){
        imcCalculator()
        setAltura(null)
        setPeso(null)
        setImcMessage("Seu IMC é igual a: ")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
    } else{
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setImcMessage("preencha o peso e altura")
    }
    
}
    return(
        <View style={styles.formContext}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form} >
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAltura} 
                    value={altura} 
                    placeholder="ex: 1.75" 
                    keyboardType="numeric" 
                >
                </TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={setPeso} 
                    value={peso}
                    placeholder="ex: 75,350" 
                    keyboardType="numeric" 
                > 
                </TextInput>

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc() }
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </Pressable>

            :   <View style={styles.resultImcArea}>
                <ImcResult imcResultMessage={imcMessage} ImcResult={imc}/>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc() }
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                </View>
            }  
            <FlatList style={styles.imcList} 
                showsVerticalScrollIndicator={true}
                data={imcList.reverse()} 
                keyExtractor={item => item.id}
                renderItem={({item}) =>{
                    return (<>
                        <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                        {item.imc}
                        </Text>
                    </> 
                    );
                }}
            />
        </View>
    );
}
export default Form;