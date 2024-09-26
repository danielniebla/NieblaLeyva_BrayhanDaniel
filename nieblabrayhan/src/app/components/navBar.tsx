"use client"
import NavElement from "./navElement";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { TbArrowBack } from "react-icons/tb";
import { SiCoursera } from "react-icons/si";

import React, { useState, useEffect } from "react";



interface NavBarProps {
    stateIn: string;
}

const NavBar: React.FC<NavBarProps> = ({stateIn}) => {
  const [state, setState] = useState({
    introduction: false,
    experiences: false,
    skills: false,
    past: false,
    courses: false,
  });
  useEffect(() => {
    // Esto se ejecuta cuando el componente se inicializa (similar a onInit)
    handleStateUpdate(stateIn);
  }, [stateIn]);

  const handleStateUpdate = (dynamicKey: string) => {
    setState(prevState => ({
      ...prevState,             // Mantener los valores anteriores
      [dynamicKey]: true        // Actualizar solo la clave dinámica
    }));
  };

  
  return (
    <div className="flex bg-db justify-around">
      <a href="/">
        <NavElement 
          description="introdution" 
          imagen={<FaHouseChimneyUser className="w-10 h-10" />} 
          init={state.introduction} 
        />
      </a>
      <a href="/experiences">
        <NavElement 
          description="experiences" 
          imagen={<FaPersonArrowUpFromLine className="w-10 h-10" />} 
          init={state.experiences} 
        />
      </a>
      <a href="/skills">
        <NavElement 
          description="skills" 
          imagen={<GiSkills className="w-10 h-10" />} 
          init={state.skills} 
        />
      </a>
      <a href="past">
        <NavElement 
          description="past" 
          imagen={<TbArrowBack className="w-10 h-10" />} 
          init={state.past} 
        />
      </a>
      <a href="courses">
        <NavElement 
          description="courses" 
          imagen={<SiCoursera className="w-10 h-10" />} 
          init={state.courses} 
        />
      </a>
    </div>
  );
};

export default NavBar;
