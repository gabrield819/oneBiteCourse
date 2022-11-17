import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultView: {
        backgroundColor: "#363636",
        alignItems: 'center',
    },
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        alignItems: 'center',
        width: "100%",
        fontSize: 48,
        color: "#b8860b",
        fontWeight: "bold",
    },
    numberImc: {
        fontSize: 22,
        color: "#b8860b",
        fontWeight: "bold",
    },
    infor: {
        fontSize: 18,
        color: "#b8860b",
        fontWeight: "bold",
    },
    boxShareButton: {
        width: "100%",
        alignItems: 'center',
        marginBottom: 10,
    },
    sharedButton: {
        backgroundColor: "#b8860b",
        borderRadius: 12,
        paddingBottom: 5,
        paddingTop: 5,

    },
    sharedButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
});

export default styles;