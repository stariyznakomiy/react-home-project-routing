import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodosList.module.css';

export const TodosList = ({ todos, isLoading }) => {
    if (isLoading) {
        return <div className={styles.loader}></div>;
    }

    if (todos.length === 0) {
        return <div className={styles.empty}>Задачи не найдены</div>;
    }

    return (
        <div className={styles.todoList}>
            {todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
        </div>
    );
};
