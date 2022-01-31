import React from 'react'
import {Input,Button} from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import{useState,useEffect,useContext} from 'react'
import Spacer from './Spacer'
import useSaveTrack from '../hooks/useSaveTrack'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

const TrackForm=({callback})=>{

    const {state:{name, recording,locations}, 
        startRecording, 
        stopRecording, 
        changeName}= useContext(LocationContext)
        //console.log(locations.length)


    const [saveTrack]=useSaveTrack() 
//console.log(name)
    return ( <>
    <Spacer>
    <CustomInput state={{inputState:name,stateSetter:changeName}}title={"Enter Track Name"} placeholder={"Track Name"} ></CustomInput>
    {/*<Input value={name} placeholder="Enter Name" onChangeText={changeName}/>*/}
    {/*recording ? <Button title="Stop Recording" onPress={stopRecording}/>:
    <Button title="Start Recording" onPress={startRecording}/>
    */}
    {recording ?  <CustomButton title={"Stop Recording"} object={null}
                    onSubmit={()=>{
                        stopRecording()
                        }}></CustomButton>:
    <CustomButton title={"Start Recording"}  object={null}
                        onSubmit={()=>{ 
                            startRecording()
                            }}></CustomButton>
    }
   
    {
        !recording && locations.length ? /*<Button title="Save Recording" onPress={saveTrack}/>*/<CustomButton title={"Save Track"}  object={null}
        onSubmit={()=>{ 
            saveTrack()
            }}></CustomButton> : null
    }
    </Spacer>
    
    
        
    </>)
}
export default TrackForm