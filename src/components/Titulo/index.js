import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

function Titulo() {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>OneBiteHealt</Text>
            {/* <Main/> */}
        </View>
    );
}
export default Titulo;