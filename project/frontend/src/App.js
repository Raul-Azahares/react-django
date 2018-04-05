import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      challenges: []
    };
  }

  componentDidMount() {
    axios.get('/api/challenges')
      .then(res => {
        this.setState({ challenges: res.data });
        console.log(this.state.challenges);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
            CHALLENGE
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add CHALLENGE</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {this.state.challenges.map(challenge =>
                  <tr>
                    <td><Link to={`/show/${challenge.id}`}>{challenge.title}</Link></td>
                    <td>{challenge.author}</td>
                    <td>{challenge.points}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
