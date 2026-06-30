/* Imports */
import styles from'./App.module.css'

/* Js */

import {useState, useEffect} from 'react'
import { Card } from './components/card'
 
function App() {

  const [dados, setDados] = useState([])


  useEffect(() => {
    fetch('/card.json')
    .then((response) => response.json())
    .then(data => {
      setDados(data)
    })
  }, [])
  
  return (
    /* HTML */
    <>
    <nav className={styles.menu}>
      <a href="#sessao1" >Conflito Entre Israel e Palestina </a>
      <a href="#sessao2" > Disputa histórica </a>
      <a href="#sessao3" > Reivindicação e mudança </a>
      <a href="#sessao4" > Aliados de Israel</a>
      <a href="#sessao5" > Apoios e Opiniões</a>
      <a href="#sessao6" > Não mantém relação com Israel</a>
    </nav>

    <main>
      <section className={styles.sessao1} id ='sessao1'>
          <div className={styles.wrapCards}>
            {dados.map((item) => {
              return(
                <div> key={item.id}
                <div>
                  <Card texto={item.tecnologia}
                  imagem={item.imagem}/>
                </div>
                </div>
              )
            })}
            
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>A Guerra</h2>
            <p className={styles.paragraph}> Desenvolvedor Informática e Robótica Básica. Estou aprendendo programação e desenvolvimento web.</p>
          </div>
        </section>
    </main>
      
    </>
  )
}

export default App
