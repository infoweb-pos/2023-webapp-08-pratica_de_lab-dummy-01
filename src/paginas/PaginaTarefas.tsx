const PaginaTarefas = () => {
	const tarefa = {
		id: 1,
		todo: "codificar requisições a api dummy json",
		completed: false,
		userId: 1,
	};

	return (
		<div className="card">
			<h2>Lista de tarefas</h2>
			<div className="card">
				<label>
					<input
						type="checkbox"
						name={`${tarefa.id}`}
						checked={tarefa.completed}
					/>
					{tarefa.todo}
				</label>
			</div>
		</div>
	);
};

export default PaginaTarefas;
