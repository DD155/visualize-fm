'use client'; 

import styled from 'styled-components'

export const Container = styled.div`
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    position: absolute;

    h1 {
        color: ${({theme}) => theme.colors.accentColor};
    }

    h1 > span {
        color: ${({theme}) => theme.colors.mainColor};
    }
`