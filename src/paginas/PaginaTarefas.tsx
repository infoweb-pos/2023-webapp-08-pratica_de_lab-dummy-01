import { useState } from "react";

interface propsTarefa {
	id: number;
	titulo: string;
	feito: boolean;
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
	const [tarefas] = useState([
		{
			id: 1,
			todo: "codificar requisições a api dummy json",
			completed: false,
			userId: 1,
		},
	]);

	return (
		<div className="card">
			<h2>Lista de tarefas</h2>
			<TarefaItem
				id={tarefas[0].id}
				titulo={tarefas[0].todo}
				feito={tarefas[0].completed}
			/>
		</div>
	);
};

export default PaginaTarefas;
