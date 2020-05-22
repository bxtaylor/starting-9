import React, { Component } from 'react';
import SelectPlayer from '../containers/SelectPlayer';
import Team from '../team/Team';
import styled from 'styled-components';


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

class ComparePlayer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: 'Y',      
    };   
  }

  render() {
    return (
      <>
        <h2>Compare Players to Build Your Team.</h2>
        <FlexContainer>
          <div>
            <SelectPlayer />            
          </div>
          <div>
            <SelectPlayer />            
          </div>
        </FlexContainer>
        <Team />
      </>
    )
  }
}

export default ComparePlayer;