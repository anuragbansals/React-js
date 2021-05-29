import React from 'react'
import ReactDOM from 'react-dom'
import Tweets from './components/Tweets'


const App  = () => {
    return (
        <div>
            <Tweets/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
