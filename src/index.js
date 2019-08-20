import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'

const App = () => {
    return (
        <div>
            <Header title="dUber"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
