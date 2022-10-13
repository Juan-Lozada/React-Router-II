import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from "@mui/material/Box";


const axios = require("axios").default;




const Home = () => {

  const [pokemones, setPokemones] = useState([])

  const navigate = useNavigate()

  const goToPokemon = () => {
    const pokeFinder = (document.getElementById('PokeSelect')).value;
    navigate(`/PokeC/${pokeFinder}`);
  };

  useEffect(() => {
    async function getPokemones() {
      try {
        const resp = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
        );
        const PokeList = resp.data.results;
        setPokemones(PokeList);

      } catch (error) {
        console.error(error);
      }
    }
    getPokemones();
  }, []);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="mainView ">
        <div className='select'>
          <h1 className='text-center' style={{ color: '#d03056' }}>POKEMON SEARCH</h1>
          <Autocomplete
            getOptionLabel={(pokemon) => pokemon.name}
            noOptionsText={'No found this pokemon'}
            id="PokeSelect"
            options={pokemones}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Pokemon" />
            )}
          />
          <Button style={{width:'25vh'}} onClick={goToPokemon} className="btn-danger">Search</Button>
        </div>
      </div>
    </Box>
  )
}

export default Home
