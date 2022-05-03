import '../styles/LandingPage.scss'

export const Container = ({ children }) => {
    return (
        <div className={'container'}>
            {children}
        </div>);
}


export const ContainerCards = ({ children }) => {
    return (
        <div className={'container-cards'}>
            {children}
        </div>);
}
