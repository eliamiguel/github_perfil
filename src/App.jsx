import { useState } from "react"


import Perfil from "./assets/components/perfil"
import styles from "../src/assets/components/Perfil/Perfil.module.css"
// import Formulario from "./assets/components/Formulario"
import RespList from "./assets/components/Repositorio/ResList"



function App() {

  const [nomeUsuario, setNomeUsuario]= useState('');
  return (
    < >
    <div className={styles.inserirUsuario}>
      <label htmlFor="input"><b>Digite seu usuário do Github</b></label>
      <input onBlur={e => setNomeUsuario(e.target.value) } type="text" id="input" placeholder="Seu usuário"/>
      </div>
 
  {nomeUsuario.length > 4 &&(
    <>
     <Perfil nomeUsuario={nomeUsuario}/>
  <RespList nomeUsuario={nomeUsuario}/>
  
    </>
  )
  }
{/*TornaVisivel && <Formulario/>*/}
  {/* <button onClick={()=> setTornaVisivel(!TornaVisivel)} type="button" >toggle form</button>
    
   */}
   </>
  )
}

export default App
