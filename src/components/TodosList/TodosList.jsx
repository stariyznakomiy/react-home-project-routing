import { TodoItem } from '../TodoItem/TodoItem';
import { PAGE_TEXTS } from '../../constants';
import styles from './TodosList.module.css';

export const TodosList = ({ todos, isLoading }) => {
    if (isLoading) {
        return <div className={styles.loader}></div>;
    }

    if (todos.length === 0) {
        return <div className={styles.empty}>{PAGE_TEXTS.NO_TASKS}</div>;
    }

    return (
        <ul className={styles.todoList}>
            {todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
        </ul>
    );
};
