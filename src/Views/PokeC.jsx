import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Css/Card.css'
import { Col, Container, Row } from 'react-bootstrap'

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const axios = require("axios").default;



function PokeC() {

  const [pokemon, setPokemon] = useState('');
  const { pokeName } = useParams();


  useEffect(() => {
    async function getPokemon() {
      try {
        const resp = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + pokeName
        );
        const pokeList = resp.data;
        setPokemon(pokeList);
        console.log(pokeList)
      } catch (error) {
        console.error(error);
      }
    }
    getPokemon();
  }, []);

  function colorFondo(colorType) {
    switch (colorType) {
      case "normal":
        return "#A8A77A";

      case "water":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhf4-271fd765-dfec-44fc-9985-3538b0bceb36.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNlwvZDNpbmhmNC0yNzFmZDc2NS1kZmVjLTQ0ZmMtOTk4NS0zNTM4YjBiY2ViMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ex1fAmGO_jN7L6MxCKT83Hoi8JE6zLv2e-DGvPrMNe8)";

      case "fire":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f144fa15-4001-4f05-83d9-73ad837f6bc4/d4wcj31-53a8338d-c2b1-4a00-ad15-aaa314cb9f6b.png/v1/crop/w_174,h_250,x_0,y_0,scl_0.40941176470588,q_70,strp/classic_pkmn_tcg_texture_pack_by_flamingclaw_d4wcj31-250t.jpg)";

      case "electric":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30751457-a50b-4f4c-a9f2-5a8ee5504f89/d6awe5m-d41ba327-6970-4ab7-8353-6f236d203006.png/v1/fill/w_174,h_250,strp/electric_type_by_nod3rator_d6awe5m-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjExIiwicGF0aCI6IlwvZlwvMzA3NTE0NTctYTUwYi00ZjRjLWE5ZjItNWE4ZWU1NTA0Zjg5XC9kNmF3ZTVtLWQ0MWJhMzI3LTY5NzAtNGFiNy04MzUzLTZmMjM2ZDIwMzAwNi5wbmciLCJ3aWR0aCI6Ijw9NDI1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hoya5ArpdKDNjWhnLTUFH8qmyIuhBirVm08RHX4VbXE)";

      case "grass":
        return "#7AC74C";

      case "ice":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/176622e8-bf4c-4d60-9a64-b75cff245c16/d6ada67-356f47fc-c8fe-49b7-b59a-313219d7022c.png/v1/fill/w_174,h_250,strp/pokemon_tcg_ice_texture_by_ilkcmp_d6ada67-250t.png)";

      case "fighting":
        return "#C22E28";

      case "poison":
        return "#A33EA1";

      case "ground":
        return "#E2BF65";

      case "flying":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiunp-9b7ed924-3cfe-412d-ae2f-ce3c853209a4.png/v1/fill/w_178,h_250,strp/flying_texture_by_metagross101_d6aiunp-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdW5wLTliN2VkOTI0LTNjZmUtNDEyZC1hZTJmLWNlM2M4NTMyMDlhNC5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2arUONEXv6Ct61so66_j2oZQX4V5dmGiazYnGniAN_Y)";

      case "psychic":
        return "#F95587";

      case "bug":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiu5e-337f596a-ae46-496e-9c27-83d4eaca7938.png/v1/fill/w_178,h_250,strp/bug_texture_by_metagross101_d6aiu5e-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdTVlLTMzN2Y1OTZhLWFlNDYtNDk2ZS05YzI3LTgzZDRlYWNhNzkzOC5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7vqTNaTnkQcJYCJVm5O5LBjrB9d_N6HSzH1e0FnIbt8)";

      case "rock":
        return "#B6A136";

      case "ghost":
        return "#735797";

      case "dragon":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3n22fk-ca665f8a-9aa5-4508-9132-a0cc7b06c3b8.png/v1/fill/w_174,h_250,q_70,strp/pokemon_tcg_dragon_texture_rip_unofficial_by_ilkcmp_d3n22fk-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvMTc2NjIyZTgtYmY0Yy00ZDYwLTlhNjQtYjc1Y2ZmMjQ1YzE2XC9kM24yMmZrLWNhNjY1ZjhhLTlhYTUtNDUwOC05MTMyLWEwY2M3YjA2YzNiOC5wbmciLCJ3aWR0aCI6Ijw9NDI4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ffjzmk8vl_m_6QSLPi1jKHaz4o2MEDZgCq00SWuVTEA)";

      case "dark":
        return "#705746";

      case "steel":
        return "#B7B7CE";

      case "fairy":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiuby-5741a594-3fbd-4d86-991a-449e6bcf989b.png/v1/fill/w_178,h_250,strp/fairy_texture_by_metagross101_d6aiuby-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdWJ5LTU3NDFhNTk0LTNmYmQtNGQ4Ni05OTFhLTQ0OWU2YmNmOTg5Yi5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ya98eyKvtA1_HfPG1KQnTc3antZ7fttYQwlBhBSfJ64)";
    }
  }

  return (
    <>
      <Container className=''>
        <div className="card" style={{backgroundColor:'#92A9BD'}}>
          {pokemon !== "" ? (
            <>
              <div className="divImageType p-4">
                <div className="Container d-flex justify-content-center p-3" style={{
                  border: 'solid 10px', borderRadius: '5% / 3.5%', borderColor: 'goldenrod',
                  backgroundImage: colorFondo(pokemon.types[0].type.name),
                  backgroundRepeat: 'no-repeat', backgroundSize: '51vh'
                }}>
                  <img
                    className="imageCharacter p-3"
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt='pokeImg'
                    style={{ width: '30vh', height: '30vh', borderRadius: '5% / 3.5%' }}
                  ></img>
                </div>
                <div className=" d-flex flex-column p-3">
                  <h1 className="titleName">{pokemon.name}</h1>
                  <h2
                    className="titleType"
                  >
                    {pokemon.types[0].type.name}
                  </h2>
                </div>
              </div>
              <Container className='d-flex flex-column'>
                <Row className='mb-1'>
                  <Col>HP</Col>
                  <Col>Attack</Col>

                </Row>
                <Row className='mb-1'>
                  <Col>{pokemon.stats[0].base_stat}</Col>
                  <Col>{pokemon.stats[1].base_stat}</Col>

                </Row>
                <Row >
                  <Col>Defense</Col>
                  <Col>Special Attack</Col>
                </Row>
                <Row className='mb-1'>
                  <Col>{pokemon.stats[3].base_stat}</Col>
                  <Col>{pokemon.stats[2].base_stat}</Col>
                </Row>

                <Row className='mb-3'>
                  <Col>Special Defense</Col>
                  <Col>Speed</Col>
                </Row>
                <Row className='mb-3'>
                  <Col>{pokemon.stats[4].base_stat}</Col>
                  <Col>{pokemon.stats[5].base_stat}</Col>
                </Row>


              </Container>
            </>
          ) : (
            "not"
          )}
        </div>
      </Container>
    </>
  )
}

export default PokeC
