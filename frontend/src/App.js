import React, { useState } from 'react';
import './global.css';
import Routes from './routes';

function App() {
  //const [counter, setCounter]  = useState(0);
  //UseState nos retorna um Array [valor Da Variavel, funcao De Atualização Do Valor]
  //function increment(){
    //setCounter(counter + 1)
  //}  
  return (
    //<Header title="Semana OmniStack"/>
    //<Header title="">
    //  Semana OmniStack
    //</Header>
    //<div>
    //  <Header>Contador: {counter} </Header>
    //  <button onClick={increment}>Incrementar</button>
    //</div>
    <Routes />
  );
}

export default App;
