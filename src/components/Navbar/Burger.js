// Burger.js
import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
 import Menu  from './Menu';

const Burger = ({open, setOpen}) => {

  return (
    <>
      <StyledBurger  open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu open={open}/>
    </>
  )
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;