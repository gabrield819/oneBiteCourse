import React from "react";
import { View, Text } from "react-native";

function ImcResult(props) {
    return(
        <View>
            <Text>{props.imcResult}</Text>
            <Text>{props.imcResultMessage}</Text>
        </View>
    );
}
export default ImcResult;