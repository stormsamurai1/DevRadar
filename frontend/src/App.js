import React, {useEffect, useState} from 'react';

import API from './services/API';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './Components/DevItem/DevItem'
import DevForm from './Components/DevForm/DevForm'

function App() {

  const [devs, setDevs] = useState([])

  useEffect(()=>{
    async function loadDevs(){
      const res = await API.get('/devs')

      setDevs(res.data)
    }

    loadDevs();
  },[])

  async function handleSubmit(data){
    const githubUser = data.github_username
    const { techs, latitude, longitude } = data
    const res = await API.post('/devs',{githubUser, techs, latitude, longitude})

    setDevs([...devs, res.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit}/>
      </aside>
      
      <main>
        <ul>
          {devs.map((dev)=> (
              <DevItem dev={dev} key={dev._id}/>
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
