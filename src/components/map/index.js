import React from 'react'
import styled from 'styled-components'
import getFont from '../../utils/font'

const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: bisque;
`

const Content = styled.div`
    font: ${getFont()};
    margin: 30px;
`

const Map = () => (
    <Container>
        <Content>
            Map
        </Content>
    </Container>
)

export default Map
