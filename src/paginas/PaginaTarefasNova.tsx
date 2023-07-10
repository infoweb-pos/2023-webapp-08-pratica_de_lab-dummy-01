import axios from "axios";
import { useState } from "react";

const api = axios.create({
	baseURL: "https://dummyjson.com/",
});

const PaginaTarefasNova = () => {
	const [tarefa, setTarefa] = useState("");
	const tratarClique = () => {
		const json = {
			todo: tarefa,
			completed: false,
			userId: 1,
		};
		console.log(json);
		api.post("/todo/add", json)
			.then(() => setTarefa(""))
			.catch((erro) => console.log(erro));
	};

	return (
		<div className="card">
			<h2>Lista de tarefas</h2>
			<h3>Tarefa nova</h3>
			<div>
				<label>
					Tarefa:&nbsp;
					<input
						type="text"
						value={tarefa}
						onChange={(evento: React.FormEvent<HTMLInputElement>) =>
							setTarefa(evento.target.value)
						}
					></input>
				</label>
				<button onClick={tratarClique} disabled={tarefa === ""}>
					Criar nova tarefa
				</button>
			</div>
		</div>
	);
};

export default PaginaTarefasNova;
