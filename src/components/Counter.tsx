import { useState } from "react"
import classes from './Counter.module.scss' // импорт scss модулей

export function Counter() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={handleClick}> increment </button>
        </div>
    )
}