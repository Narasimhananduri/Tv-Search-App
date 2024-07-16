const form = document.querySelector('#searchform');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchterm = form.elements.query.value;
    console.log(searchterm)

    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`);
    clearResults();
    makeimgs(res.data);
    form.elements.query.value = '';
});

const makeimgs = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            resultsContainer.appendChild(img);
        }
    }
}

const clearResults = () => {
    resultsContainer.innerHTML = '';
}
