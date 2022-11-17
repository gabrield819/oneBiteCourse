import React from "react";
import { View, Text } from "react-native";

function ImcResult(props) {
    return(
        <View>
            <Text>{props.imcResultMessage}</Text>
            <Text>{props.ImcResult}</Text>
        </View>
    );
}
export default ImcResult;