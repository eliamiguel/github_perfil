import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from './ReposList.module.css'

const ResList = ({nomeUsuario}) => {

  const [res, setRes]= useState([]);
  const [estacarregando, setEstacarregando]= useState(true);
  ResList.propTypes = {
    nomeUsuario: PropTypes.string.isRequired, 
  };
   useEffect(()=>{
    setEstacarregando(true)
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    .then(res => res.json())
    .then(respJson =>{
      setTimeout(()=>{
        setEstacarregando(false);
        setRes(respJson);
      }, 3000)
      
    })
   }, [nomeUsuario]);
   return(
    <div className="container">
    {estacarregando? 
    (<h1>Carregando...</h1>
    ):(<ul className={styles.list}>
      {/* {res.map(respositorio =>(} */}
      {res.map(({id, name, language, html_url}) =>(
        <li className={styles.listItem} key={id}>
          <div className={styles.itemName}><b>Nome:</b> {name} </div>
          <div className={styles.itemLinguage}><b>Linguagem:</b> {language}</div> 
          <a className={styles.itemLink} target="noopener" href={ html_url} >Ver no Github</a>
        </li>
      ))}
     
    </ul>)}
    
    
   </div>
   )
}
export default ResList