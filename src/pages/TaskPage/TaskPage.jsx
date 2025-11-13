import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useRequestGetOneTodo, useRequestDeleteTodo, useRequestUpdateTodo } from '../../hooks';
import { ROUTES, BUTTON_TEXTS, PAGE_TEXTS } from '../../constants';
import styles from './TaskPage.module.css';

export const TaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { todo, isLoading, error, editingTitle, setEditingTitle, setTodo } =
        useRequestGetOneTodo(id);
    const { isEditing, setIsEditing, isUpdating, requestUpdateTodo } =
        useRequestUpdateTodo(setTodo);
    const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo();

    const redirect = () => navigate(ROUTES.HOME);

    const handleSave = () => {
        requestUpdateTodo(id, editingTitle);
    };

    const handleDelete = () => {
        requestDeleteTodo(id, redirect);
    };

    if (isLoading) {
        return <div className={styles.loader}>Загрузка...</div>;
    }

    if (error || !todo) {
        return <Navigate to={ROUTES.NOT_FOUND} replace={true} />;
    }

    return (
        <div className={styles.taskPage}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                {BUTTON_TEXTS.BACK}
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
                                {isUpdating ? BUTTON_TEXTS.SAVING : BUTTON_TEXTS.SAVE}
                            </button>
                            <button
                                onClick={() => {
                                    setIsEditing(false);
                                    setEditingTitle(todo.title);
                                }}
                                disabled={isUpdating}
                                className={styles.cancelBtn}
                            >
                                {BUTTON_TEXTS.CANCEL}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.viewMode}>
                        <h1 className={styles.taskTitle}>{todo.title}</h1>
                        <div className={styles.taskActions}>
                            <button
                                onClick={() => setIsEditing(true)}
                                disabled={isDeleting}
                                className={styles.editBtn}
                            >
                                {BUTTON_TEXTS.EDIT}
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className={styles.deleteBtn}
                            >
                                {isDeleting ? BUTTON_TEXTS.DELETING : BUTTON_TEXTS.DELETE}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
