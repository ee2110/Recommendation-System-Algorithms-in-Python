const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    makeImage(res.data);


})

const makeImage = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.data[0].show.image.medium;
            document.body.append(img);
        }

    }
}