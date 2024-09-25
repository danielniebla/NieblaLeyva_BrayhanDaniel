"use client";
import React, { useState, useRef } from 'react';

interface NavElementProps {
    description: string;
    imagen: React.ReactNode; // Cambiado a React.ReactNode para aceptar componentes
    init: boolean;
}

const NavElement: React.FC<NavElementProps> = ({ description, imagen, init }) => {
    const [hovered, setHovered] = useState(false);
    const nodeRef = useRef(null);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setTimeout(() => {
            setHovered(false);
        }, 50);     
    };

    return (
        <>
        {init ? (
            <div>
            <div className='bg-mbb w-24 h-24 rounded-full flex flex-col justify-center items-center m-auto p-2 rounded-br-none rounded-bl-none'>
                <div className=' m-auto justify-center m-auto '>{imagen}</div> 
                <div className='m-0 p-0 justify-center '>
                    <p>{description}</p>
                </div>
            </div>
            </div>
        ) : (
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {hovered ? (
                    <div className='bg-mbb w-24 h-24 rounded-full m-0 p-2 flex flex-col justify-center items-center m-auto rounded-br-none rounded-bl-none'>
                        <div className=' m-auto justify-center m-auto '>{imagen}</div> 
                        <div className='m-0 p-0'>
                            <p>{description}</p>
                        </div>
                    </div>
                ) : (
                    <div className='w-24 h-24 m-auto bg-mbb flex justify-center items-center rounded-full'>{imagen}</div>
                )}
            </div>
        )}
        </>
    );
};

export default NavElement;
