import React from 'react';

export function PokemonCard({ name }) {
    return (
        <div style={{
            border: '2px solid black',  
            padding: '15px',
            borderRadius: '10px',
            textAlign: 'center',
            width: '140px',
            backgroundColor: '#f8f8f8',
            fontWeight: 'bold',  
            boxShadow: '3px 3px 10px rgba(0,0,0,0.1)'
        }}>
            <h3 style={{ textTransform: 'capitalize', color: '#333' }}>{name}</h3>
        </div>
    );
}
