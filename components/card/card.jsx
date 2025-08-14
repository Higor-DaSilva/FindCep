import { Text, View, StyleSheet,  } from "react-native";


export const Card = ({ cep, logradouro, bairro, uf, localidade, complemento }) => {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>{cep}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>{logradouro}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>{bairro}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>{uf}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Cidade:</Text>
                <Text style={styles.valor}>{localidade}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Complemento:</Text>
                <Text style={styles.valor}>{complemento || "-"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "70%",
        minHeight: "60%",
        padding: 20,
        // backgroundColor: "#FFFFFF",
        // shadowColor: "#b2b2b2ff",
        // shadowOffset:{width: 0, height: 2},
        // shadowOpacity: 0.5,
        // shadowRadius:2,
        // elevation: 2
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 4px",
        gap: 10
    },
    tituloValor: {
        fontWeight: 600,
        // fontFamily:"Poppins"
    }
})