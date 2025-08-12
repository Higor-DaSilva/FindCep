import { Text, View, StyleSheet, Image,ImageBackground } from "react-native";
import {Input} from "../components/input/input"
import {Botao} from "../components/botao/botao"
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
   <View style={styles.container}>
      {/*Titulo  */}
      <Text style={styles.titulo}>Consulte seu CEP</Text>

      {/* Input */}
      <Input/>
      {/* Botao */}
      <Botao tituloBotao="Consultar"/>
      {/* Card */}
   </View>

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
  flex: 1.5,
  alignItems:"center",
  paddingTop: 50,
  paddingBottom: 50,
  gap:40
},
titulo:{
  fontSize: 25
}
})