let trilho = document.getElementById('trilho');
let espaco = document.getElementById('espaco');
let body = document.querySelector('body');
let header = document.querySelector('header');
let nav = document.getElementById('nav-lateral');

document.addEventListener('DOMContentLoaded', () => {
    // Aplica o modo escuro se já estiver habilitado no localStorage
    if (localStorage.getItem('dark') === 'enable') {
        trilho.classList.add('dark');
        body.classList.add('dark');
        header.classList.add('dark');
        espaco.classList.add('dark');
        nav.classList.add('dark');
    }
});

trilho.addEventListener('click', () => {
    // Alterna as classes dark
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    espaco.classList.toggle('dark');
    nav.classList.toggle('dark');

    // Atualiza o localStorage com a nova configuração
    if (trilho.classList.contains('dark')) {
        localStorage.setItem('dark', 'enable');
    } else {
        localStorage.setItem('dark', 'disable');
    }
});
