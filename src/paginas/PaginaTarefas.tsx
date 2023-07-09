import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
	baseURL: "https://dummyjson.com/",
});

interface propsTarefa {
	id: number;
	titulo: string;
	feito: boolean;
}

interface jsonTarefa {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

interface jsonDeRespostaDoGet {
	todos: [];
	total: number;
	skip: number;
	limit: number;
}

const TarefaItem = (props: propsTarefa) => {
	return (
		<div className="card">
			<label>
				<input
					type="checkbox"
					name={`${props.id}`}
					checked={props.feito}
				/>
				{props.titulo}
			</label>
		</div>
	);
};

const PaginaTarefas = () => {
	const [tarefas, setTarefas] = useState([]);

	useEffect(() => {
		api.get<jsonDeRespostaDoGet>("/todos?limit=10").then((resposta) =>
			setTarefas(resposta.data.todos)
		).catch((erro: any) => console.error(erro));
	}, []);

	return (
		<div className="card">
			<h2>Lista de tarefas</h2>
			{tarefas.map((tarefa: jsonTarefa) => (
				<TarefaItem
					key={tarefa.id}
					id={tarefa.id}
					titulo={tarefa.todo}
					feito={tarefa.completed}
				/>
			))}
		</div>
	);
};

export default PaginaTarefas;
