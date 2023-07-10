const PaginaTarefasNova = () => {
    return (
        <div className="card">
            <h2>Lista de tarefas</h2>
			<h3>Tarefa nova</h3>
            <div>
                <label>
                    Tarefa:&nbsp;
                    <input type="text"></input>
                </label>
                <button>Criar nova tarefa</button>
            </div>
        </div>
    );
}

export default PaginaTarefasNova;