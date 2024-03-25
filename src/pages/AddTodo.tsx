import { useCallback, useState } from 'react';

interface AddTodoProps {
	addTodo: (content: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
	const [content, setContent] = useState('');
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (content.trim() === '') return;
		addTodo(content);
		setContent('');
	};
	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value),
		[]
	);
	return (
		<form action="" onSubmit={handleSubmit}>
			<input type="text" value={content} onChange={handleInputChange} />
			<button className="underline">添加新事项</button>
		</form>
	);
};
export default AddTodo;
