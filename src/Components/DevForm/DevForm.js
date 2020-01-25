import React, {useState, useEffect} from 'react'

import './DevForm.css'

export default function DevForm( { onSubmit } ){

    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude,setLatitude] = useState('')
    const [longitude,setLongitude] = useState('')
  

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            const {latitude, longitude} = position.coords;
          },
          (err)=>{
            console.log(err)
          },
          {
            timeout: 30000
          }
        );
      },[])

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            github_username, techs, latitude, longitude
        });
            
        setGithubUsername('')
        setTechs('')
    }

    return(

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input onChange={(e)=>setGithubUsername(e.target.value)} 
                   name="github_username" 
                   id="github_username" 
                   value={github_username}
                   required/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input onChange={(e)=>setTechs(e.target.value)}
                   name="techs" 
                   id="techs" 
                   value={techs}
                   required/>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input onChange={(e)=>setLatitude(e.target.value)} 
                     type="number" 
                     name="latitude" 
                     id="latitude"
                     value={latitude}
                     required  />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input onChange={(e)=>setLongitude(e.target.value)} 
                     type="number" 
                     name="longitude" 
                     id="longitude"
                     value={longitude} 
                     required  />
            </div>

          </div>

          <button onClick={(e)=>handleSubmit(e)} type="submit">Salvar</button>
        </form>

    )
}