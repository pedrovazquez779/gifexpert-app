const apiKey = '8T8Zp3qvVITPXtvavSMX8voDatFaEJh3';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    // Este log lo vamos a ver 2 veces en la consola por el modo estricto de React, no es que este mal
    // console.log(gifs);

    return gifs;
}