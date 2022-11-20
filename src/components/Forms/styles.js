import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        bottom: 0,
        backgroundColor: "#363636",
        alignItems: 'center',
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        paddingTop: 32,
        marginTop: 16,
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
        margin: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: "center",
    },
    textButtonCalculator: {
       fontSize: 32,
       color: "#fff",
    },
    erroMessage: {
        fontSize: 16,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    resultImcArea: {
        width: "100%",
        height: "50%",
    },
    imcList: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
        height: 50,
        width: "100%",
        paddingRight:20,
    },
    textResultItemList: {
        fontSize: 16,
        color: "white",
    }

});
export default styles;