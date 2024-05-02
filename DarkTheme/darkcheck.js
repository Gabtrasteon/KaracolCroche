document.addEventListener('DOMContentLoaded', () => {
    const darkModeStatus = localStorage.getItem('dark');
    if (darkModeStatus === 'enable') {
        document.body.classList.add('dark');
        document.querySelector('header').classList.add('dark');
        document.getElementById('nav-lateral').classList.add('dark');
        
    }
});
