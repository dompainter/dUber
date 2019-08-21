import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import getFont from './utils/font'

import Header from './components/header'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    font-family: sans-serif;
    background-color: #fafafa;
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

const UserInput = styled.div`
    height: 100px;
`

const App = () => (
    <main>
        <Row>
            <Column flexSize={1}>
                <UserInput>
                    <Header title="dUber"/>
                </UserInput>
            </Column>
            <Column flexSize={2}>
                <p>Column 2</p>
            </Column>
        </Row>
        <GlobalStyle />
    </main>
)

ReactDOM.render(<App/>, document.getElementById('app'))
