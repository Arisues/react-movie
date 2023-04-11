const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b88ae0c209957d223eb38d70bff9672f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;