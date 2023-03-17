const URL = "http://localhost";

// Tente pegar os 10 últimos clientes
export async function getClientes() {
    try {
        const response = await fetch(URL);
        return await response.json();
    } catch (error) {
        console.error(error)
        return [];
    }
}

// Tenta buscar um cliente por id
export async function getCliente(id) {
    try {
        const response = await fetch(`${URL}/?id=${id}`);
        return await response.json();
    } catch (error) {
        console.error(error)
        return [];
    }
}

// Tenta buscar clientes por string
export async function procurarClientes(query) {
    try {
        const response = await fetch(`${URL}/?query=${query}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Tenta criar um cliente na database
export async function criarCliente(cliente) {
    try {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
    } catch (error) {
        console.error(error);
    }
}

// Tenta atualizar um cliente na database
export async function atualizarCliente(cliente) {
    try {
        await fetch(`${URL}/?id=${cliente.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
    } catch (error) {
        console.error(error);
    }
}

// Tenta remover um cliente na database
export async function removerCliente(id) {
    try {
        await fetch(`${URL}/?id=${id}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error(error);
    }
}