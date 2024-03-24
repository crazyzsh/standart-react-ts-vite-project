export interface Todo {
	id: number;
	content: string;
	completed: boolean;
}
type DeleteOrToggleAction = {
	(id: number): void;
};
export interface TodoAction {
	deleteTodo: DeleteOrToggleAction;
	toggleTodo: DeleteOrToggleAction;
}
