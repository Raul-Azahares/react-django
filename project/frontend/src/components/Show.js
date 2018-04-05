import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      challenge: {}
    };
  }

  componentDidMount() {
    axios.get('/api/challenges/'+this.props.match.params.id)
      .then(res => {
        this.setState({ challenge: res.data });
        console.log(this.state.challenge);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/challenges/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.challenge.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> CHALLENGE List</Link></h4>
            <dl>
              <dt>Title:</dt>
              <dd>{this.state.challenge.title}</dd>
              <dt>Author:</dt>
              <dd>{this.state.challenge.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.challenge.description}</dd>
              <dt>Points:</dt>
              <dd>{this.state.challenge.points}</dd>
            </dl>
            <Link to={`/edit/${this.state.challenge.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.challenge.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;