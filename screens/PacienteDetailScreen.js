
import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, Alert }from 'react-native'
import { set } from 'react-native-reanimated'
import firebase from '../database/firebase'

export const PacienteDetailScreen = (props) => {
     const initialState =  {
     id:"",
     nombre:"",
     apellido:"",
     sexo:"",
     fecha:"",
     hora:"",
     enfermedad:""
 }

     const [paciente, setPaciente] = useState()
     const [loading,setloading] = useState(true)
     
    const getPacienteById = async (id) =>{
       const dbRef = firebase.db.collection('paciente').doc(id)
       const doc = await dbRef.get();
       const paciente =doc.data();
      setPaciente({
          ...paciente,
          id: doc.id,
      })
      setloading(false)
    };

   useEffect(()=>{
        getPacienteById(props.route.params.pacienteId);

   },[]);
   
   const handleChangeText= (nombre,value)=>{
    setPaciente({...paciente, [nombre]: value});
     };

     const deletePaciente= async () =>{
      
         const dbRef=firebase.db.collection('paciente').doc(props.route.params.pacienteId);
          await dbRef.delete();
          props.navigation.navigate('PacienteList')
    }
    const updatePaciente =async()=>{
        const dbRef = firebase.db.collection('paciente').doc(paciente.id);
        await dbRef.set({
            nombre:paciente.nombre,
            apellido:paciente.apellido,
            sexo:paciente.sexo,
            fecha:paciente.fecha,
            hora:paciente.hora,
            enfermedad:paciente.enfermedad
        }) 
        setPaciente(initialState)
        props.navigation.navigate('PacienteList')
    }   
    const openConfirmationAlert = ()=> {
     Alert.alert('Borrar el paciente','Esta seguro?',[
        {text:'Si', onPress: ()=>deletePaciente()},
        {text:'No', onPress: ()=>console.log(false)},
     ])
    }
     if(loading){
         return(
             <View>
                 <ActivityIndicator size= "large"color="#9e9e9e"/>
             </View>
         )
     }

    return (
        <ScrollView style={styles.container}>
           <View style= {styles.inputGroup} >
               <TextInput placeholder="Nombre Paciente"
               value={paciente.nombre}
               onChangeText={(value) => handleChangeText("nombre", value) }/>
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder="Apellido Paciente"
                value={paciente.apellido}
                onChangeText={(value) => handleChangeText("apellido", value) } />
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder="Sexo Paciente"
                value={paciente.sexo}
               onChangeText={(value) => handleChangeText("sexo", value) }/>
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder=" Fecha"
                value={paciente.fecha}
               onChangeText={(value) => handleChangeText("fecha", value) }/>
           </View>

           <View style= {styles.inputGroup}>
               <TextInput placeholder="Hora"
                value={paciente.hora}
               onChangeText={(value) => handleChangeText("hora", value) }/>
           </View>

           <View style= {styles.inputGroup}>
               <TextInput placeholder="Enfermedad"
                value={paciente.enfermedad}
               onChangeText={(value) => handleChangeText("enfermedad", value) }/>
           </View>

           <View>
               <Button color="#B12345" title="Update paciente" onPress= {() => updatePaciente()}/>
              
           </View>

           <View>
           <Button color="#A95856" title="Delete paciente" onPress= {() =>openConfirmationAlert()}/>
           </View>

       </ScrollView>
    )
}
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
          padding:35
      },
      inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    },
  });
  
export default PacienteDetailScreen