

import React,{useEffect, useState} from "react";
import { View, Text, ScrollView,Button}from "react-native";
import firebase from"../database/firebase";
import {ListItem, Avatar} from 'react-native-elements'

export const PacienteList = (props) => {

   const [paciente, setPaciente] = useState([])

   useEffect(() => {

       firebase.db.collection('paciente').onSnapshot(querySnapshot =>{
           
       const paciente =[];

       querySnapshot.docs.forEach(doc =>{
      const {nombre,apellido, sexo,fecha,hora,enfermedad }=doc.data()
      paciente.push({
          id:doc.id,
          nombre,
          apellido,
          sexo,
          fecha,
          hora,
          enfermedad
      })

    });
    setPaciente(paciente)
  });
  },[]);

    return (
     <ScrollView>
         <Button title=" Crear paciente"onPress={()=>props.navigation.navigate("CreatePacienteScreen")}/>
         {
                   paciente.map(paciente =>{
                       return(
                           <ListItem

                           key={paciente.id}bottomDivider onPress={()=> 
                           props.navigation.navigate('PacienteDetailScreen',{
                               pacienteId: paciente.id
                           })} >
                           
                               <ListItem.Chevron/>
                               <Avatar source={{
                                uri:
                                'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg',
                                }}
                                rounded

                                />
                               <ListItem.Content>
                               <ListItem.Title>{paciente.nombre}</ListItem.Title>
                              <ListItem.Subtitle>{paciente.apellido}</ListItem.Subtitle>
                               </ListItem.Content>

                           </ListItem>
                        
                       )
                   })
              }
     </ScrollView>
    )
}
export default PacienteList