import React from 'react'
import { useState } from 'react';

const PersonaItem = ({ success, datagql, error }) => {
  const initialState = datagql;
  const [person, setPerson] = useState(initialState)
  if (!success){
    try {
        const obj = JSON.parse(error);
        console.log(obj);    
    } catch (error) {
        console.log(error);    
    }    
    
  }else{
    console.log("Personas:", person);
  }

  

  return (
      <div>Personas</div>
  )
}

export default PersonaItem

