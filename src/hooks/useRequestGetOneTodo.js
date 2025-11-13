import { useEffect, useState } from 'react';
import { TODOS_URL } from '../constants/todosUrl';

export const useRequestGetOneTodo = (id) => {
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [editingTitle, setEditingTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        setIsLoading(true);
        setError(null);

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
            .catch((fetchError) => {
                setError(fetchError.message);
                setTodo(null);
                setEditingTitle('');
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    return {
        todo,
        isLoading,
        error,
        editingTitle,
        setEditingTitle,
        setTodo,
    };
};
