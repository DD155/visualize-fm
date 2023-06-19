'use client'

import React, { FC } from 'react'
import { Container } from '../components/styles/Container.styled'
import { GlobalStyle } from '../components/styles/Global.styled'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/styles/Theme.styled'
import SearchBar from '../components/SearchBar'

const Home: FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <h1> visualize.<span>fm </span></h1>
                <SearchBar/>
            </Container>
            </ThemeProvider>
        </>
        
    )
}

export default Home
