import { TodosContainer } from '../../components/TodosContainer/TodosContainer';
import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <h1>Мои задачи</h1>
            <TodosContainer />
        </div>
    );
};
