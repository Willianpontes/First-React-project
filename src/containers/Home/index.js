import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

import ImgPrincipal from '../../assets/img-principal.svg'
import Vetor from '../../assets/vetor.svg'

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button} from "./styles";

const App = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  
  const inputName = useRef()
  const inputAge = useRef()
  

async function addNewUser() {
  const {data: newUser} = await axios.post("http://localhost:3001/users", {
  name: inputName.current.value, 
  age: inputAge.current.value})
  
  setUsers([ ...users, newUser])

  navigate("/usuarios")

  //setUsers([ ...users, {id: Math.random(), name: inputName.current.value , age: inputAge.current.value}])
}

  return (
    <Container>
      <Image src={ImgPrincipal} />
    <ContainerItens>
      <H1>Olá!</H1>
      
      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder="Nome"></Input>
      
      <InputLabel>Idade</InputLabel>
      <Input ref={inputAge} placeholder="Idade"></Input>
      
      <Button onClick={addNewUser} >Cadastrar <img alt="seta" src = {Vetor} /> </Button>

    </ContainerItens>
    </Container>
    );

}

export default App