import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { TaskPage } from './pages/TaskPage/TaskPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/task/:id" element={<TaskPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};
