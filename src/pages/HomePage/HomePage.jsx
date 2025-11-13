import { TodosContainer } from '../../components/TodosContainer/TodosContainer';
import { TITLE_TEXTS } from '../../constants';
import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <h1>{TITLE_TEXTS.MY_TASKS}</h1>
            <TodosContainer />
        </div>
    );
};
