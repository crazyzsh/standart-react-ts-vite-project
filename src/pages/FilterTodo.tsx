import { memo } from 'react';
interface FilterTodoProps {
	setFilterType: (type: string) => void;
}

const FilterTodo = ({ setFilterType }: FilterTodoProps) => {
	const action = [
		{ all: '全部' },
		{ unCompleted: '待办' },
		{ completed: '已办' },
	];
  const test=(num:number)=>{
    return num++
  }
	return (
		<div>
			{action.map((item) => (
				<button
					key={Object.keys(item)[0]}
					onClick={() => setFilterType(Object.keys(item)[0])}
				>
					{Object.values(item)[0]}
				</button>
			))}
		</div>
	);
};

export default memo(FilterTodo)
