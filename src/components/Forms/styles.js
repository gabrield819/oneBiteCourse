import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#363636",
        alignItems: 'center',
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        marginTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        margin: 30,
        padding: 10,
    },
    formLabel : {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 8,
        backgroundColor: "#fff",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        width: "90%",
        height: 44,
        backgroundColor: "#b8860b",
        margin: 12,
        paddingLeft: 10,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: "center",
    },
    textButtonCalculator: {
       fontSize: 32,
       color: "#fff",
    },
});
export default styles;