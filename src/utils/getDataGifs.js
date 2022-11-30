export const getDataGifs = async (category) => {

    const url_base = 'https://api.giphy.com/v1/gifs/search'
    const api_key = 'Sj6EWsy4RV22aZqZngX6De6A6y94ic3s'

    let url_search = `${url_base}?api_key=${api_key}&q=${category}&limit=10`

    const response = await fetch(url_search);
    const { data } = await response.json();

    const gifs = data.map( img => 
        ({
            id: img.id,
            titlte: img.title,
            url: img.images.downsized_medium.url
        }))
    

    console.log(gifs)
    return gifs;
}