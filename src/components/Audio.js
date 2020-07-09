import React from 'react'

function Audio(props) { 

    // state = {
    //     songs: []
    // }

    // componentDidMount() {
    //     fetch(`http://localhost:3000/songs`)
    //     .then(resp => resp.json())
    //     .then(json => this.setState({
    //       songs: json
    //     }))
    // }

    // getCurrentSong = () => {
    //     const currentDate = new Date()
    //     const currentHour = currentDate.getHours()
    //     const weather = ["Rainy", "Snowy", "Sunny"]
    //     const currentWeather = weather[Math.floor(Math.random() * weather.length)]
    
    //     const availableSongs = this.state.songs.filter(songObj => songObj.weather === currentWeather)
    
    //     const currentSong = availableSongs.find(songObj => songObj.hour === currentHour)
    
    //     if (currentSong) {return currentSong.url}
    // }

    function randomSong() {
        const arr = []

        for (var i = 1; i <= 72; i++) {
            arr.push(i);
        }
        
        const x = arr[Math.floor(Math.random() * arr.length)]

        return x
    }

    function returnAudio() {
        if (props.enabled) return <audio controls autoPlay loop hidden>
            {/* <source src={this.getCurrentSong()}/> */}
            <source src={`http://acnhapi.com/v1/hourly/${randomSong()}`}/>
        </audio>
    }

    function returnButton() {
        if (props.enabled) {
            return <img className="audio" alt="pause button" src="https://static.thenounproject.com/png/3266982-200.png" onClick={props.toggleAudio}/>
        }
        
        else {
            return <img className="audio" alt="play button" src="https://static.thenounproject.com/png/2715729-200.png" onClick={props.toggleAudio}/>
        }
    }

    return (
        <div>
            {returnButton()}
            {returnAudio()}
        </div>
    )
}

export default Audio