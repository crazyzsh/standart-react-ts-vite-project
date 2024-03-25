import { TodoContext } from '@/App';
import { Todo } from '@/types';
import { useContext } from 'react';
type TodoItemProps = {
	todo: Todo;
};
function TodoItem({ todo }: TodoItemProps) {
	const { toggleTodo, deleteTodo } = useContext(TodoContext);
	return (
		<li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			<span>{todo.content}</span>
			<button onClick={() => toggleTodo(todo.id)}>切换</button>
			<button onClick={() => deleteTodo(todo.id)}>删除</button>
		</li>
	);
}
export default TodoItem;
