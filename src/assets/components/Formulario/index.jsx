import { useState, useEffect } from "react";

const Formulario = ()=>{
const [nome, setNome]= useState('')
const [nA, setNA]= useState(0)
const [nB, setNB]= useState(0)
const [nC, setNC]= useState(0)

const nomeUsuaria = (evento)=>{
  setNome(evento.target.value)
}
const numeroA= (evento)=>{
  setNA(parseFloat(evento.target.value))
}
const numeroB = (evento) =>{
  setNB(parseFloat(evento.target.value))
}
const numeroC = (evento) =>{
  setNC(parseFloat(evento.target.value))
}
const calcular = () =>{
  const soma = nA + nB + nC
  const media = soma / 3
  
  if(media >= 7){
    return <p>Olá {nome} sua media é {media} você esta aprovado</p>
  }else{
  return <p>Olá {nome} sua media é {media} você esta reprovado</p>
  }
}

useEffect(() => {
  console.log('inicio')
  return () => {
    console.log('Fim')
  }
}, [])
const nomes = ['Elias', 'João', 'Fabio', 'Guilherme', 'Alberto'];

  return(
    <form >
    <input type="text" onChange={nomeUsuaria} /><br />
    <input type="number" onChange={numeroA} /><br />
    <input type="number" onChange={numeroB} /><br />
    <input type="number" onChange={numeroC} /><br />
    {nome}<br />
    {nA}<br />
    {nB}<br />  
    {nC}<br />
    <p>{calcular()}</p>
<ul>
    {nomes.map(item => (
      <li key={item}>
          {item}
      </li>

    ))}
</ul>
    </form>
    )
}

export default Formulario;