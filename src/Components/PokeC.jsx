import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Css/Card.css'
import Table from 'react-bootstrap/Table'

function PokeC(props) {

  const [pokemon, setPokemon] = useState({});
  const { pokeNombre } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNombre}`);
      const pokeData = await res.json();
      console.log(pokeData)
      setPokemon(pokeData)
    }
    getPokemon();

  }, [])

  return (
    <>
      <div className='selected-pokemon'>
      {pokemon.map((pokemon) => {
              <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Attacks</th>
                  <th>Defense</th>
                  <th>Special Attack</th>
                  <th>Special Defense</th>
                  <th>Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{pokemon.stats[0].base_stat}</td>
                  <td>{pokemon.stats[1].base_stat}</td>
                  <td>{pokemon.stats[2].base_stat}</td>
                  <td>{pokemon.stats[3].base_stat}</td>
                  <td>{pokemon.stats[4].base_stat}</td>
                </tr>
              </tbody>
            </Table>
      })}
      </div>
    </>
  )
}

export default PokeC
