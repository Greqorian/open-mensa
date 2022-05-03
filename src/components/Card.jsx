import '../styles/LandingPage.scss'

const Card = ({name, city, address}) => {
    return (
        <div className={'card'}>
            <h4>{name}</h4>
            <p> {city}</p>
            <p> {address}</p>
        </div>
    );
}

export default Card;