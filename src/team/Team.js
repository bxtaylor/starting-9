import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Player Name</td>
            <td>Primary Position</td>
            <td>Batting Avg</td>
          </tr>
        </thead>
      </table>
    );
  }
}

export default Team;