import { BUTTON_TEXTS } from '../../constants';
import styles from './SortTodoButton.module.css';

export const SortTodoButton = ({ sortOrder, toggleSortOrder }) => {
    return (
        <button type="button" className={styles.sortButton} onClick={toggleSortOrder}>
            {!sortOrder ? BUTTON_TEXTS.SORT_ASC : BUTTON_TEXTS.SORT_DEFAULT}
        </button>
    );
};
