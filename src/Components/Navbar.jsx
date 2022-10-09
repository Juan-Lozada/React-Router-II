import React from 'react'
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export default function Nvbar() {
    
    const activeLink = ({ isActive }) => (isActive ? 'active' : 'default')
    return (
        <>
            <Navbar bg="dark" className='justify-content-between p-2'>
                    <Navbar.Brand> 
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmQNDTcB4v9rcFyz2iCQldxDWTqAD-KxAdR-Uv_Lq9J2jf4YQxfNx0v5oDYdoROZ--LI&usqp=CAU"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt='brand-img'
                        />
                    </Navbar.Brand>
                    <div>
                        <NavLink className={activeLink} to='/React-Router-II'>
                            Home
                        </NavLink>
                        {' - '}
                        <NavLink className={activeLink} to='/PokeC/:pokeNombre'>
                            Pokemon
                        </NavLink>
                    </div>

            </Navbar>
        </>
    )
}