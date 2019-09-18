import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import getFont from './utils/font'
import JourneyDetails from './components/journey-details'
import Map from './components/map'
import { chelseaBlue, black } from './utils/palette'

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
    }
`

const Column = styled.div`
    display: flex;
    font: ${getFont()};
    flex: ${props => props.flexSize || 1};
    margin-left: 10px;
`

const Row = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`

const DetailsCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Logo = styled.h1`
    font: ${getFont({ size: 50, fontFamily: '\'Righteous\', cursive' })};
    text-align: center;
    color: ${chelseaBlue};
    text-shadow: -2px 3px 2px ${black};
`

const App = () => (
    <main>
        <Row>
            <Column flexSize={1}>
                <DetailsCol>
                    <Logo>dUber</Logo>
                    <JourneyDetails />
                </DetailsCol>
            </Column>
            <Column flexSize={2}>
                <Map />
            </Column>
        </Row>
        <GlobalStyle />
    </main>
)

ReactDOM.render(<App/>, document.getElementById('app'))
