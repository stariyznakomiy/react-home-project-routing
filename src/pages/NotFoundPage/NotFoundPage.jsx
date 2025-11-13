import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.message}>Страница не найдена</p>
                <p className={styles.description}>
                    Извините, запрашиваемая страница не существует.
                </p>
                <Link to={ROUTES.HOME} className={styles.homeLink}>
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
};
