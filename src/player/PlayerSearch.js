import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Autosuggest from 'react-autosuggest'

class PlayerSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []      
    };
    this.onSuggestionsFetchRequested = _.debounce(this.onSuggestionsFetchRequested, 100);
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue })
  }

  renderSuggestion = suggestion => {
    return (
      <div className="result">
        <div>{suggestion.name_display_first_last}</div>        
      </div>
    )
  }

  onSuggestionsFetchRequested = ({ value }) => {
    axios.get('http://lookup-service-prod.mlb.com/json/named.search_player_all.bam', {
        params: {
          'sport_code': "'mlb'",
          'active_sw': "'Y'",
          'name_part': `'${value}%'`
        }
      })
        .then(response => {
          const row = response.data.search_player_all.queryResults.row;          
          let results = row;
          if (row) {
            // Coming from the API, 'row' is an array until there is only one 
            // result, then it turns in single object.              
            if (!Array.isArray(row)) {
              results = [row];
            }
          }
          else {
            results = [];
          }
          this.setState({suggestions: results});
        })
        .catch(error => {
          console.log(error);
        })
        .then();
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestionValue = suggestion => {
    this.props.setPlayer(suggestion);
    return suggestion.name_display_first_last;
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        getSuggestionValue={this.getSuggestionValue}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default PlayerSearch;