const URL = "http://localhost";

export async function getClientes() {
    try {
        const response = await fetch(URL);
        return await response.json();
    } catch (error) {
        console.error(error)
        return [];
    }
}

export async function getCliente(id) {
    try {
        const response = await fetch(`${URL}/?id=${id}`);
        return await response.json();
    } catch (error) {
        console.error(error)
        return [];
    }
}