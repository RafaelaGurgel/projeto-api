const btnBuscar = document.getElementById('btnBuscar');
const resultados = document.getElementById('resultados');

btnBuscar.addEventListener('click', async () => {
    resultados.innerHTML = ''; // Limpar resultados anteriores
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados');
        }

        const data = await response.json();

        data.forEach(usuario => {
            const divUsuario = document.createElement('div');
            divUsuario.classList.add('usuario');
            divUsuario.innerHTML = `<strong>Nome:</strong> ${usuario.name} <br> <strong>Email:</strong> ${usuario.email}`;
            resultados.appendChild(divUsuario);
        });

    } catch (error) {
        const mensagemErro = document.createElement('p');
        mensagemErro.style.color = 'red';
        mensagemErro.textContent = 'Erro ao buscar os dados ou API não está respondendo.';
        resultados.appendChild(mensagemErro);
        console.error(error);
    }
});
