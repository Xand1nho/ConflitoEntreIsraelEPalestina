/* imports stytles e tilt */

import styles from './card.module.css'
import Tilt from 'react-parallax-tilt';

export const Card = (props) => {
return(
    <Tilt>
        <div className={styles.card}>
            <img src={props.imagem} alt={props.texto} />
        </div>
    </Tilt>
)

}