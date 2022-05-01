import '../styles/LandingPage.scss'
import { useQuery } from 'react-query'

const LandingPage = () => {


    const { isLoading, isError, data, error } = useQuery('companyData', () =>
        fetch(`https://openmensa.org/api/v2/canteens?near[lat]=52.393535&near[lng]=13.127814&near[dist]=5`).then((res) =>
            res.json()
        )
    )

    if (isLoading) {
        console.log('loading')
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (data) { console.log(data) }

    return (
        <div className={'container'}>
            <div className={'container-cards'}>
                {data.map((i, index) => {
                    return (<div key={index} className={'card'}>
                        <p> {i.id}</p>
                        <p> {i.name}</p>
                        <p> {i.address}</p>
                    </div>)
                })}
            </div>
        </div>);
}

export default LandingPage;