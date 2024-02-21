import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
    const [todo, setTodo] = useState("");

    const saveTodos = () => {
        // Save all todos
        setTodos([...todos, todo]);
        // Wipe the input box
        setTodo("");
    }

    return (
        <section className={styles.createTodoSection}>
            <input
                value={todo}
                onKeyDown={event => event.key === "Enter" && saveTodos()}
                onChange={event => setTodo(event.target.value)}
                className={styles.createTodoInput} placeholder="Start typing..." />
            <button
                className={`btn ${styles.btn}`}
                onClick={() => saveTodos()}
            >Create</button>
        </section>
    );
}

export default CreateTodo;