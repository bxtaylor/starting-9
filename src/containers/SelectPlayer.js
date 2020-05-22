import React, { Component } from 'react';
import PlayerSearch from '../player/PlayerSearch';
import PlayerCard from '../player/PlayerCard';

class SelectPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      player: {}
    }
    this.setPlayer = this.setPlayer.bind(this);
  }

  setPlayer(player) {    
    this.setState({player: player});
  }

  render() {
    return(
      <div>
        <PlayerSearch setPlayer={this.setPlayer} placeholder="Select a player" />
        <PlayerCard player={this.state.player}/>
      </div>
    )
  }
}

export default SelectPlayer;