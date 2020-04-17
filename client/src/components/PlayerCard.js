import React from 'react'

class PlayerCard extends React.Component {

    constructor() {
        super()
        this.state = {
            players:[]
        }

    }

    componentDidMount() {
        console.log('this is CDM inside Playercard,js')
        fetch(`http://localhost:5000/api/players`)
        .then(res => res.json())
        .then(players => {
            console.log('player data should be here: ', players)
            this.setState({players:players})
        })
        .catch(err => console.log('there was an error: ', err))

    }

    render(){
        return(
            <div className='playercard'>
            {this.state.players.map((item, i) => <div key={i}>
              <h3>Name: {item.name}</h3>
              <p>Country: {item.country}</p> 
              <p>Searches: {item.searches}</p></div>)}
        </div>
        )
    }

}
export default PlayerCard