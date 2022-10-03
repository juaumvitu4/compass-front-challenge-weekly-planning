const service = {
	save: () => localStorage.setItem("items", JSON.stringify(diaSemana)),
	find: () => JSON.parse(localStorage.getItem("items")) ?? []
}
