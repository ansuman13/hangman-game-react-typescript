import styles from "./Keyboard.module.css"

const keys = "abcdefghijklmnopqrstuvwxyz".split("")


export function Keyboard() {
    return <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem",
        }}
    >
        {keys.map((k, i) => <button
            className={`${styles.btn}`} key={i}
        >{k.toUpperCase()}</button>)}
    </div>
}