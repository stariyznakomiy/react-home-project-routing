import { useState } from 'react';
import { TODOS_URL, METHODS } from '../constants';

export const useRequestUpdateTodo = (setTodo) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const requestUpdateTodo = (id, editingTitle) => {
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

    return {
        isEditing,
        setIsEditing,
        isUpdating,
        requestUpdateTodo,
    };
};
