import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./styles";

function ImcResult(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.ImcResult,
        })
    }

    return(
        <View style={styles.resultView}>
            <View style={styles.boxShareButton}>
                <Text style={styles.infor}>{props.imcResultMessage}</Text>
                <Text style={styles.numberImc}>{props.ImcResult}</Text>
                
                <TouchableOpacity onPress={onShare} style={styles.sharedButton}>
                    <Text style={styles.sharedButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ImcResult;