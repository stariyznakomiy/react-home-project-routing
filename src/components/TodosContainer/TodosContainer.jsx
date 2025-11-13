import { useRequestAddTodo, useRequestGetTodos, useTodosFilter } from '../../hooks';
import styles from './TodosContainer.module.css';
import { TodosList } from '../TodosList/TodosList';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';
import { SortTodoButton } from '../SortTodoButton/SortTodoButton';
import { SearchTodos } from '../SearchTodos/SearchTodos';

export const TodosContainer = () => {
    const { todos, isLoading, setTodos } = useRequestGetTodos();
    const { isCreating, requestAddTodo } = useRequestAddTodo(setTodos);
    const { filteredAndSortedTodos, sortOrder, searchQuery, setSearchQuery, toggleSortOrder } =
        useTodosFilter(todos);

    return (
        <div className={styles.todos}>
            <div className={styles.todosFilters}>
                <SortTodoButton sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
                <SearchTodos searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <TodosList todos={filteredAndSortedTodos} isLoading={isLoading} />
            <AddTodoButton isCreating={isCreating} onAddTodo={requestAddTodo} />
        </div>
    );
};
