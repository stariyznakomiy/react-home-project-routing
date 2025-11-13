import { useState } from 'react';
import { TODOS_URL, METHODS } from '../constants';

export const useRequestDeleteTodo = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const requestDeleteTodo = (id, redirect) => {
        setIsDeleting(true);

        fetch(`${TODOS_URL}/${id}`, {
            method: METHODS.DELETE,
        }).then(() => {
            redirect();
        });
    };

    return {
        isDeleting,
        requestDeleteTodo,
    };
};
