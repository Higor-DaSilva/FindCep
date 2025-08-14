import { Text, View, StyleSheet, Image,ImageBackground, ScrollView } from "react-native";
import {Input} from "../components/input/input"
import {Botao} from "../components/botao/botao"
import {Card} from "../components/card/card"
export default function Index() {
  return (
   <>
   {/* Logo com imgaem de fundo */}
    <ImageBackground source={require('../assets/images/ImgFundo.png')}
    style={styles.imgFundo}>
      <Image source={require('../assets/images/LogoFindCEP.png')}
      style={styles.logo}></Image>

    </ImageBackground>
   {/* Campo de consulta  */}
   <ScrollView style={styles.containerScrolls}>
   <View style={styles.container}>
      {/*Titulo  */}
      <Text style={styles.titulo}>Consulte seu CEP</Text>

      {/* Input */}
      <Input/>
      {/* Botao */}
      <Botao tituloBotao="Consultar"/>
      {/* Card */}
      <Card/>
   </View>
   </ScrollView>x

   </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
imgFundo:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  width:"100%",
  height:"100%"
},
logo:{
  width:"100",
  height:"120"
},
container:{
  gap:40,
  width:"100%",
  minHeight:"100%",
  alignItems:"center"
},
containerScrolls:{
  flex:1.5,
  paddingTop: 50,
  height:"100%",
  paddingBottom:50
},
titulo:{
  fontSize: 25,
  // fontFamily:"Poppins",
  fontWeight:600,
  fontStyle:"SemiBold"
}
})