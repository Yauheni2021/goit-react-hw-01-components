import { PropTypes } from "prop-types"
import styles from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{ title}</h2>
        </section>
    )
}