import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Vetor from '../../assets/vetor.svg'
import Trash from '../../assets/lixeira.svg'

import { Container, H1, Image, ContainerItens,  Button, User } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }

    fetchUsers()

  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUser = users.filter((user) => user.id !== userId)
    setUsers(newUser)
  }

function goBackPage() {
  navigate("/")
}

  return (
    <Container>
      <Image alt="avatar" src={Avatar} />

      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => { deleteUser(user.id) }}> <img src={Trash} alt="lata" /> </button>
              </User>
            ))
          }
        </ul>

        <Button onClick={goBackPage}> <img alt="seta" src={Vetor} /> Voltar  </Button>

      </ContainerItens>
    </Container>
  );

}

export default Users