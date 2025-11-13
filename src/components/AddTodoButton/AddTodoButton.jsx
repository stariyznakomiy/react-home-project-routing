import { BUTTON_TEXTS } from '../../constants';
import styles from './AddTodoButton.module.css';

export const AddTodoButton = ({ isCreating, onAddTodo }) => {
    return (
        <button
            type="button"
            className={styles.addButton}
            disabled={isCreating}
            onClick={onAddTodo}
        >
            {isCreating ? BUTTON_TEXTS.ADDING : BUTTON_TEXTS.ADD_TASK}
        </button>
    );
};
