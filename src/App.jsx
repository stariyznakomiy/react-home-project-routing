import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { TaskPage } from './pages/TaskPage/TaskPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ROUTES } from './constants';
import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.TASK} element={<TaskPage />} />
                <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace={true} />} />
            </Routes>
        </div>
    );
};
