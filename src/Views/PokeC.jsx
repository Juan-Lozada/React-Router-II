import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Css/Card.css'
import { Col, Container, Row } from 'react-bootstrap'


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
      } catch (error) {
        console.error(error);
      }
    }
    getPokemon();
  }, []);

  function colorFondo(colorType) {
    switch (colorType) {
      case "normal":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNlwvZDNpbmh5aS0yOGUxNmNiNi05ZDM3LTRhNmUtYmRjNi0wZDdmY2YwYWY1NzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gqQUvb9pdKz_BDtsTqXkpM1_aUHox6IXyveVcugbntg)";

      case "water":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhf4-271fd765-dfec-44fc-9985-3538b0bceb36.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNlwvZDNpbmhmNC0yNzFmZDc2NS1kZmVjLTQ0ZmMtOTk4NS0zNTM4YjBiY2ViMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ex1fAmGO_jN7L6MxCKT83Hoi8JE6zLv2e-DGvPrMNe8)";

      case "fire":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f144fa15-4001-4f05-83d9-73ad837f6bc4/d4wcj31-53a8338d-c2b1-4a00-ad15-aaa314cb9f6b.png/v1/crop/w_174,h_250,x_0,y_0,scl_0.40941176470588,q_70,strp/classic_pkmn_tcg_texture_pack_by_flamingclaw_d4wcj31-250t.jpg)";

      case "electric":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30751457-a50b-4f4c-a9f2-5a8ee5504f89/d6awe5m-d41ba327-6970-4ab7-8353-6f236d203006.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwNzUxNDU3LWE1MGItNGY0Yy1hOWYyLTVhOGVlNTUwNGY4OVwvZDZhd2U1bS1kNDFiYTMyNy02OTcwLTRhYjctODM1My02ZjIzNmQyMDMwMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AUmy6I5dg6CxX8xfTeDtVElZ_nv9mn5hbsOsGjl1cUw)";

      case "grass":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5oulfh-45f9111f-d787-4040-8609-50e8ce099b31.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxY2NmZGI3LWFjMWQtNDIzZi1hMjc2LWFmNjNhYmFlNWJhMlwvZDVvdWxmaC00NWY5MTExZi1kNzg3LTQwNDAtODYwOS01MGU4Y2UwOTliMzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wt8BhJoij8hLyZ30gBjZMpDZqt2-R78C8gpKybza1VU)";

      case "ice":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/176622e8-bf4c-4d60-9a64-b75cff245c16/d6ada67-356f47fc-c8fe-49b7-b59a-313219d7022c.png/v1/fill/w_174,h_250,strp/pokemon_tcg_ice_texture_by_ilkcmp_d6ada67-250t.png)";

      case "fighting":
        return "url(https://static.wikia.nocookie.net/pokemongo/images/1/17/Type_Background_Fighting.png/revision/latest/scale-to-width-down/250?cb=20171026003644)";

      case "poison":
        return "url(https://static.wikia.nocookie.net/pokemongo/images/d/db/Type_Background_Poison.png/revision/latest/scale-to-width-down/250?cb=20171026003759)";

      case "ground":
        return "url(https://yts.torrentbay.to/assets/images/movies/pokemon_the_movie_white_victini_and_zekrom_2011/large-screenshot1.jpg)";

      case "flying":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiunp-9b7ed924-3cfe-412d-ae2f-ce3c853209a4.png/v1/fill/w_178,h_250,strp/flying_texture_by_metagross101_d6aiunp-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdW5wLTliN2VkOTI0LTNjZmUtNDEyZC1hZTJmLWNlM2M4NTMyMDlhNC5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2arUONEXv6Ct61so66_j2oZQX4V5dmGiazYnGniAN_Y)";

      case "psychic":
        return "url(https://wallpapercave.com/wp/wp7262633.jpg)";

      case "bug":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiu5e-337f596a-ae46-496e-9c27-83d4eaca7938.png/v1/fill/w_178,h_250,strp/bug_texture_by_metagross101_d6aiu5e-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdTVlLTMzN2Y1OTZhLWFlNDYtNDk2ZS05YzI3LTgzZDRlYWNhNzkzOC5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7vqTNaTnkQcJYCJVm5O5LBjrB9d_N6HSzH1e0FnIbt8)";

      case "rock":
        return "url(https://pbs.twimg.com/media/E3yd8POWQA8zPDY.jpg)";

      case "ghost":
        return "url(data:image/jpeg;base64,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)";

      case "dragon":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3n22fk-ca665f8a-9aa5-4508-9132-a0cc7b06c3b8.png/v1/fill/w_174,h_250,q_70,strp/pokemon_tcg_dragon_texture_rip_unofficial_by_ilkcmp_d3n22fk-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvMTc2NjIyZTgtYmY0Yy00ZDYwLTlhNjQtYjc1Y2ZmMjQ1YzE2XC9kM24yMmZrLWNhNjY1ZjhhLTlhYTUtNDUwOC05MTMyLWEwY2M3YjA2YzNiOC5wbmciLCJ3aWR0aCI6Ijw9NDI4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ffjzmk8vl_m_6QSLPi1jKHaz4o2MEDZgCq00SWuVTEA)";

      case "dark":
        return "url(https://c4.wallpaperflare.com/wallpaper/852/726/487/pokemon-cubone-dark-wallpaper-preview.jpg)";

      case "steel":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c938f85-f834-4bb3-b3b2-97d295769464/d4kzalw-7e8dc7cc-346c-4e5a-af22-e61f9f5f526f.png/v1/fill/w_178,h_250,q_70,strp/new_pk_metal_texture_by_icycatelf_d4kzalw-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvM2M5MzhmODUtZjgzNC00YmIzLWIzYjItOTdkMjk1NzY5NDY0XC9kNGt6YWx3LTdlOGRjN2NjLTM0NmMtNGU1YS1hZjIyLWU2MWY5ZjVmNTI2Zi5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3Zjnj3ybWdGQveBVFdK6k91V9Gf1mrHCVX-UdEPm1I4)";

      case "fairy":
        return "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiuby-5741a594-3fbd-4d86-991a-449e6bcf989b.png/v1/fill/w_178,h_250,strp/fairy_texture_by_metagross101_d6aiuby-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdWJ5LTU3NDFhNTk0LTNmYmQtNGQ4Ni05OTFhLTQ0OWU2YmNmOTg5Yi5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ya98eyKvtA1_HfPG1KQnTc3antZ7fttYQwlBhBSfJ64)";
    }
  }

  return (
    <Container fluid className='d-flex justify-content-center'>
      <Row>
        <Col>
          <div className="card p-4 d-flex justify-content-center" style={{
            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLa-Mt-8xAyXNMINI6PFutoJIcPCNKVEyc2l9EHx4RGdzAUGUfLtUErbqrLKt8mo742U&usqp=CAU)',
            backgroundRepeat: 'no-repeat', backgroundSize: '62vh'
          }}>
            {pokemon !== "" ? (
              <Container className='cardContainer' >
                <div className=" d-flex flex-column text-center">
                  <h1 className="titleName">{pokemon.name}</h1>
                </div>
                <div className="divImageType px-5">
                  <div className="Container d-flex justify-content-center p-3" style={{
                    border: 'solid 10px', borderRadius: '5% / 3.5%', borderColor: 'goldenrod',
                    backgroundImage: colorFondo(pokemon.types[0].type.name),
                    backgroundRepeat: 'no-repeat', backgroundSize: '80vh'
                  }}>

                    <img
                      className="imageCharacter p-3"
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt='pokeImg'
                      style={{ width: '30vh', height: '25vh', borderRadius: '5% / 3.5%' }} />

                  </div>
                  <div className=" d-flex flex-column p-3 text-center">
                    <h2
                      className="titleType"
                    >
                      {pokemon.types[0].type.name}
                    </h2>
                  </div>
                </div>
                <div className='stats d-flex flex-column mx-3'>
                  <Row className='mb-3 text-center'>
                    <Col><strong>HP</strong> </Col>
                    <Col><strong>Attack</strong></Col>

                  </Row>
                  <Row className='mb-3 text-center'>
                    <Col>{pokemon.stats[0].base_stat}</Col>
                    <Col>{pokemon.stats[1].base_stat}</Col>

                  </Row>
                  <Row className='mb-3 text-center'>
                    <Col><strong>Defense</strong> </Col>
                    <Col><strong>Special Attack</strong> </Col>
                  </Row>
                  <Row className='mb-3 text-center'>
                    <Col>{pokemon.stats[3].base_stat}</Col>
                    <Col>{pokemon.stats[2].base_stat}</Col>
                  </Row>

                  <Row className='mb-3 text-center'>
                    <Col><strong>Special Defense</strong></Col>
                    <Col><strong>Speed</strong> </Col>
                  </Row>
                  <Row className='mb-3 text-center'>
                    <Col>{pokemon.stats[4].base_stat}</Col>
                    <Col>{pokemon.stats[5].base_stat}</Col>
                  </Row>


                </div>
              </Container>
            ) : (
              "not"
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PokeC
