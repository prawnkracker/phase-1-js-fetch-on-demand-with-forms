const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then((movie) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.textContent = `${movie.title}`;
            summary.textContent = `${movie.summary}`;
        });
    });
}

document.addEventListener('DOMContentLoaded', init);