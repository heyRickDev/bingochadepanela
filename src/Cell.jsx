import styles from './cell.module.css'

export function Cell(props){
    return (
        <div className={styles.units}>
            <p>
                {props.value}
            </p>
        </div>
    )
}