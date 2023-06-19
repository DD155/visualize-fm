import React, { FC } from 'react'
import {Container} from '../components/styles/Container.styled'
import { GlobalStyle } from '../components/styles/Globla.styles'

const Home: FC = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <h1> Home </h1>
            </Container>
        </>
    )
}

export default Home
