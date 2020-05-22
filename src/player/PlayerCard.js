import React, { Component } from 'react';

class PlayerCard extends Component {  
  render() {
    const { player } =this.props;
    console.log(player)   
    return(
      <div>
        <h2>{player.name_display_first_last}</h2>
        <div>
          <strong>Team: </strong> {player.team_full} <br />
          <strong>Position:</strong> {player.position} <br />
          <strong>Bats: </strong> {player.bats} <strong>Throws: </strong> {player.throws}
        </div>
      </div>
    )
  }
}

export default PlayerCard;