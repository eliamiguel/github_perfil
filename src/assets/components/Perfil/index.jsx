import PropTypes from 'prop-types';
import styles from "./Perfil.module.css";

const Perfil = ({nomeUsuario }) => {

  Perfil.propTypes = {
    nomeUsuario: PropTypes.string.isRequired, 
  };
  return(
    <header className={styles.header}>
      <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="minha imagem" />
      <h1 className={styles.name} >{nomeUsuario}</h1>
    </header>
  )
}

export default Perfil;