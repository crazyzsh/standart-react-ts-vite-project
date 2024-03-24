import './App.css';
import AddTodo from '@/pages/AddTodo';
import TodoList from '@/pages/TodoList';
import FilterTodo from '@/pages/FilterTodo';
import { createContext, useCallback, useMemo, useState } from 'react';
import { Todo, TodoAction } from '@/types';

export const TodoContext = createContext<TodoAction>({} as TodoAction);
function App() {
	const [todoArray, setTodoArray] = useState<Todo[]>([]);
	const [filterType, setFilterType] = useState<string>('');

	const addTodo = useCallback(
		(content: string) => {
			const newTodo = {
				id: Date.now(),
				content,
				completed: false,
			};
			setTodoArray([...todoArray, newTodo]);
		},
		[todoArray]
	);

	const deleteTodo = useCallback(
		(id: number) => {
			setTodoArray(todoArray.filter((todo) => todo.id !== id));
		},
		[todoArray]
	);

	const toggleTodo = useCallback(
		(id: number) =>
			setTodoArray(
				todoArray.map((todo) => {
					if (todo.id === id) todo.completed = !todo.completed;
					return todo;
				})
			),
		[todoArray]
	);

	const filteredTodo = useMemo(() => {
		switch (filterType) {
			case 'unCompleted':
				return todoArray.filter((todo) => !todo.completed);
			case 'completed':
				return todoArray.filter((todo) => todo.completed);
			default:
				return todoArray;
		}
	}, [filterType, todoArray]);

	return (
		<>
			<h1>TodoList</h1>
			<AddTodo addTodo={addTodo} />
			<TodoContext.Provider value={{ deleteTodo, toggleTodo }}>
				<TodoList todoArray={filteredTodo} />
			</TodoContext.Provider>
			<FilterTodo setFilterType={setFilterType} />
		</>
	);
}
export default App;
