import { Todo } from '@/types';
import TodoItem from './TodoItem';
interface TodoListProps {
	todoArray: Array<Todo>;
}
export default function TodoList({ todoArray }: TodoListProps) {
	return (
		<ul>
			{todoArray.map((todoItem) => {
				return <TodoItem key={todoItem.id} todo={todoItem} />;
			})}
		</ul>
	);
}
