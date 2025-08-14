import { Text, View, StyleSheet, Image,ImageBackground, ScrollView } from "react-native";
import {Input} from "../components/input/input"
import {Botao} from "../components/botao/botao"
import {Card} from "../components/card/card"
import { useState } from "react";
import axios from "axios";


export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  async function consultarCep() {

    try {
      if(cep !== "" && cep.length === 8){
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        setJsonCep(resposta.data);
        console.log(jsonCep);
      }else{
        alert("O cep está incorreto. DIGITE 8 números")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
   <>
   {/* Logo com imgaem de fundo */}
    <ImageBackground source={require("../assets/images/ImgFundo.png")}
    style={styles.imgFundo}>
      <Image source={require("../assets/images/LogoFindCEP.png")}
      style={styles.logo}></Image>

    </ImageBackground>
   {/* Campo de consulta  */}
   <ScrollView style={styles.containerScrolls}>
   <View style={styles.container}>
      {/*Titulo  */}
      <Text style={styles.titulo}>Consulte seu CEP</Text>

      {/* Input */}
      <Input
      valorCep={cep}
      onChangeValorCep={e => {setCep(e); console.log(e);}}
      />
      {/* Botao */}
      <Botao tituloBotao="Consultar" onPress={consultarCep}/>
      {/* Card */}
      {/* {jsonCep.cep && (  */}
        <Card
        cep={jsonCep.cep}
        logradouro={jsonCep.logradouro}
        bairro ={jsonCep.bairro}
        uf={jsonCep.uf}
        localidade={jsonCep.localidade}
        complemento={jsonCep.complemento}
        />
      {/* )} */}
   </View>
   </ScrollView>

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
  fontFamily:"Poppins-Bold",
  color: "#000000",
  // fontWeight:600,  
  // fontStyle:"SemiBold"
}
})