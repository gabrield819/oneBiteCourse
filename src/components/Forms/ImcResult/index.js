import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function ImcResult(props) {
    return(
        <View style={styles.resultImc}>
            <Text style={styles.infor}>{props.imcResultMessage}</Text>
            <Text style={styles.infor}>{props.ImcResult}</Text>
        </View>
    );
}
export default ImcResult;