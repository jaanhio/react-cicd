import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    awardsList: null
  }

  componentDidMount() {
    axios.get('https://ollida-api.herokuapp.com/api/v1/awards').then(res => {
      const { data } = res;
      console.log(data);
      this.setState({
        awardsList: data
      });
    });
  }

  render() {
    const renderAwards = this.state.awardsList && this.state.awardsList.map((awards, index) => {
      return (
        <p>{awards.name}</p>
      )
    });
    if (this.state.awardsList) {
      return (
        <div>
          {renderAwards}
        </div>
      );
    }
    else {
      return (
        <div>
          <p>fetching data</p>
        </div>
      )
    }
  }
}
export default Home;