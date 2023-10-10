import React from 'react';
import './App.css';
import Contador from './components/Contador';
import Professores from './components/Professores';

function App() {
  return (
    <div className="App">
      <h1>Meu Aplicativo</h1>
      <Contador />
      <table className="minha-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Formação</th>
            <th>Titulação</th>
          </tr>
        </thead>
        <tbody>
          {Professores.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.idade}</td>
              <td>{professor.formacao}</td>
              <td>{professor.titulacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
