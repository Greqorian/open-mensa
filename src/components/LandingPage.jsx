
import { useQuery } from 'react-query'

import Card from './Card'
import { Container, ContainerCards } from './Containers'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'

const LandingPage = () => {

    const { isLoading, isError, data, error } = useQuery('companyData', () =>
        fetch(`https://openmensa.org/api/v2/canteens?near[lat]=52.393535&near[lng]=13.127814&near[dist]=5`).then((res) =>
            res.json()
        )
    )

    if (isLoading) {return <Spinner />}
    if (isError) {return <ErrorMessage errorMsg={error.message}/>}

    return (
        <Container>
            <ContainerCards>
                {data.map((i, index) => {
                    return (
                        <Card key={index} name={i.name} city={i.city} address={i.address} />
                    )
                })}
                
            </ContainerCards>
        </Container>);
}

export default LandingPage;