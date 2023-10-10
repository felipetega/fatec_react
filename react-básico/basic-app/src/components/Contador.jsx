import React, { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(1); 
  const mudaN = () => setNumero(numero + 1); 

  return (
    <>
      <p>Numero: {numero}</p>
      <button onClick={mudaN}>Butão do Gui</button>
    </>
  );
}

export default Contador;
