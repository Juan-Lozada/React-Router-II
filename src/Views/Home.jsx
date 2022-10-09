import React from 'react'
import { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button  } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const [id, setId] = useState('')
  const [pokemones, setPokemones] = useState([])

  const navigate = useNavigate()

  const goToPokemon = () => {
    navigate(`/pokemon/${id}`);
  }


  useEffect(() => {
    const getPokemones = async () => {
      const url = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const resp = await url.json();
      console.log(resp.results)
      setPokemones(resp.results)
    }

    getPokemones();
  }, [])


  return (
    <div>
      <Container className='d-flex flex-column gap-5 p-4'>
        <Row className='justify-content-center'>
          <h1 className='text-center'>Bienvenido Maestro Pokemon!</h1>
          <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' style={{ width: '50vh' }} alt='Bienvenida' />
        </Row>

        <Row className='d-flex flex-column gap-2'>
          <Col className='text-center '>
            <h1>Buscar Pokemon</h1>
            <Form.Select className='text-center' onChange={(e) => setId(e.target.value)}>
              <option defaultValue="selected">-- Seleccione un Pokemon --</option>
              {pokemones.map((pokemon) => (
                <option key={pokemon.url} value={pokemon.id}>{pokemon.name}</option>
              ))}
            </Form.Select>
            <Button className='btn-dark' onClick={goToPokemon}>Ir al Pokemon</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
