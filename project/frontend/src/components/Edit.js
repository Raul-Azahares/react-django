import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.challenge
    state[e.target.name] = e.target.value;
    this.setState({challenge:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, author, description,points } = this.state.challenge;

    axios.put('/api/challenges/'+this.props.match.params.id+'/', { title, author, description,points })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT CHALLENGE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.challenge._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> CHALLENGE List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.challenge.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.challenge.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.challenge.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="published_date">Points:</label>
                <input type="number" class="form-control" name="points" value={this.state.challenge.points} onChange={this.onChange} placeholder="Points" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;

