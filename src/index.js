import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import getFont from './utils/font'

import JourneyDetails from './components/journey-details'
import Map from './components/map'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
  }
`

const Column = styled.div`
    display: flex;
    font: ${getFont()};
    flex: ${props => props.flexSize || 1};
`

const Row = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`

const App = () => (
    <main>
        <Row>
            <Column flexSize={1}>
                <JourneyDetails />
            </Column>
            <Column flexSize={2}>
                <Map />
            </Column>
        </Row>
        <GlobalStyle />
    </main>
)

ReactDOM.render(<App/>, document.getElementById('app'))
