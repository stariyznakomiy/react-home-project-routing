import { PAGE_TEXTS } from '../../constants';
import styles from './SearchTodos.module.css';

export const SearchTodos = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder={PAGE_TEXTS.SEARCH_PLACEHOLDER}
            value={searchQuery}
            className={styles.searchInput}
            onChange={(event) => setSearchQuery(event.target.value)}
        />
    );
};
