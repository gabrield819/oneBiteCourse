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
        color: "#bbb",
        backgroundColor: `#222`,
        width: '84%',
        marginHorizontal: '8%',
        paddingHorizontal: 16,
        paddingVertical: 4,
        fontSize: 22,
        borderRadius: 8,
        marginTop: 8,
    },
    input: {
        width: "84%",
        marginHorizontal: '8%',
        borderRadius: 8,
        color: '#bbb',
        backgroundColor: "#444",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        width: "86%",
        marginHorizontal: '8%',
        height: 44,
        backgroundColor: "#b8860b",
        color: '#bbb',
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
        color: 'red',
        fontWeight: "bold",
        alignSelf: 'flex-end',
        marginEnd: '8%',
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
        color: "#c99420",
        fontWeight: "bold",
        height: 50,
        width: "100%",
        paddingRight:20,
    },
    textResultItemList: {
        fontSize: 16,
        color: "#daa520",
    }

});
export default styles;