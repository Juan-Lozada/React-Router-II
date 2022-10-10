import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const axios = require("axios").default;




const Home = () => {

  const [pokemones, setPokemones] = useState([])

  const navigate = useNavigate()

  const goToPokemon = () => {
    const pokeFinder = (document.getElementById('PokeSelect')).value;
    console.log(pokeFinder);
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
    <Box sx={{ flexGrow: 1 }} className="boxMain">
      <Grid container className="centerAll">
        <Grid item xs={12} className="centerAll">
          <div className="mainHome">
            <h1 style={{color: '#d03056'}}>POKEMON SEARCH</h1>
            <Autocomplete
              getOptionLabel={(pokemon) => pokemon.name}
              noOptionsText = {'No found this pokemon'}
              id="PokeSelect"
              options={pokemones}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Pokemon" />
              )}  
            />
            <Button style={{marginTop: '20px', width:'20%'}} onClick={goToPokemon} variant="contained">Search</Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
