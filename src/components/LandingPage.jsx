
import { useState } from 'react'
import { useQuery } from 'react-query'

import Card from './Card'
import { Container, ContainerCards } from './Containers'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'

const LandingPage = () => {

    const lat = 52.393535;
    const lng = 13.127814;
    const dist = 5;

    const URL = `https://openmensa.org/api/v2/canteens?near[lat]=${lat}&near[lng]=${lng}&near[dist]=${dist}`;

    const [query, setQuery] = useState(URL);

    const { isLoading, isError, data, error } = useQuery('companyData', () =>
        fetch(query).then((res) =>
            res.json()
        )
    )

    const handleQuery = (id) => {
        
        setQuery(`https://openmensa.org/api/v2/canteens/${id}`)
        console.log(query);
    };

    if (isLoading) { return <Spinner /> }
    if (isError) { return <ErrorMessage errorMsg={error.message} /> }

    return (
        <Container>
            <ContainerCards>
                {data.map((i, index) => {
                    return (
                        <div key={index} onClick={() => {  handleQuery(i.id)} }>
                            <Card name={i.name} city={i.city} address={i.address} />
                        </div>
                    )
                })}

            </ContainerCards>
        </Container>);
}

export default LandingPage;