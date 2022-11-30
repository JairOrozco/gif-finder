

export const GifItem = ({ title, url }) => {

    return (
        <>
            <figure>
                <img src={ url } alt={ title }/>
                <figcaption> { title } </figcaption>
            </figure>
        </>
    )
}