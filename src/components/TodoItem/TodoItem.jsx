import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, index }) => {
    const navigate = useNavigate();
    const { id, title } = todo;

    // Обрезаем текст если он слишком длинный
    const displayTitle = title.length > 50 ? `${title.substring(0, 50)}...` : title;

    const handleClick = () => {
        navigate(ROUTES.TASK_BY_ID(id));
    };

    return (
        <li className={styles.todoItem}>
            <div className={styles.title} onClick={handleClick}>
                {index + 1}. {displayTitle}
            </div>
        </li>
    );
};
