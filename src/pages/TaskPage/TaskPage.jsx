import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TODOS_URL, METHODS } from '../../constants';
import styles from './TaskPage.module.css';

export const TaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editingTitle, setEditingTitle] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(`${TODOS_URL}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Задача не найдена');
                }
                return response.json();
            })
            .then((task) => {
                setTodo(task);
                setEditingTitle(task.title);
            })
            .catch((error) => {
                console.error('Ошибка загрузки задачи:', error);
                setTodo(null);
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    const handleSave = () => {
        setIsUpdating(true);
        fetch(`${TODOS_URL}/${id}`, {
            method: METHODS.UPDATE,
            headers: { 'Content-type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ title: editingTitle }),
        })
            .then((response) => response.json())
            .then((updatedTodo) => {
                setTodo(updatedTodo);
                setIsEditing(false);
            })
            .finally(() => setIsUpdating(false));
    };

    const handleDelete = () => {
        fetch(`${TODOS_URL}/${id}`, {
            method: METHODS.DELETE,
        }).then(() => {
            navigate('/');
        });
    };

    if (isLoading) {
        return <div className={styles.loader}>Загрузка...</div>;
    }

    if (!todo) {
        return (
            <div className={styles.taskPage}>
                <button className={styles.backButton} onClick={() => navigate(-1)}>
                    ← Назад
                </button>
                <div className={styles.error}>Задача не найдена</div>
            </div>
        );
    }

    return (
        <div className={styles.taskPage}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                ← Назад
            </button>

            <div className={styles.taskContent}>
                {isEditing ? (
                    <div className={styles.editMode}>
                        <input
                            type="text"
                            value={editingTitle}
                            onChange={(e) => setEditingTitle(e.target.value)}
                            className={styles.editInput}
                            disabled={isUpdating}
                        />
                        <div className={styles.editActions}>
                            <button
                                onClick={handleSave}
                                disabled={isUpdating}
                                className={styles.saveBtn}
                            >
                                {isUpdating ? 'Сохранение...' : 'Сохранить'}
                            </button>
                            <button
                                onClick={() => {
                                    setIsEditing(false);
                                    setEditingTitle(todo.title);
                                }}
                                disabled={isUpdating}
                                className={styles.cancelBtn}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.viewMode}>
                        <h1 className={styles.taskTitle}>{todo.title}</h1>
                        <div className={styles.taskActions}>
                            <button onClick={() => setIsEditing(true)} className={styles.editBtn}>
                                Редактировать
                            </button>
                            <button onClick={handleDelete} className={styles.deleteBtn}>
                                Удалить
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
