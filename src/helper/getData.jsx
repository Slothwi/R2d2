const getData = async () => {
    const info = '../fotos.json'
    const response = await fetch( info )
    const data = await response.json()
    const photos = data.photos
    const images = photos.map( photo => (
    {
        id: photo.id,
        alt: photo.alt,
        src: photo.src.large,
        liked: photo.liked
    } ) )

    return images
}

export default getData