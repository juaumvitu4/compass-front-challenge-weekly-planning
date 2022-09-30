const service = {
	save: () => localStorage.setItem("items", JSON.stringify(lista)),
	find: () => JSON.parse(localStorage.getItem("items")) ?? []
}
