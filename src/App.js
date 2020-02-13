import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    members: [],
  }
  removeMember = index => {
    const { members } = this.state;

    this.setState({
      members: members.filter((member, i) => {
        return i !== index;
      })
    })
  }
  handleSubmit = member => {
    this.setState({members: [...this.state.members, member]})
  }
  render() {
    const { members }  = this.state
    return (
    <div className="app-container">
    <h1>Add Members</h1>
    <p>Fill the first empty space with the name of the member.</p>
    <p>Fill the second empty space with the nationality of the member.</p>
    <p>Hit the add button after...</p>
    <Table memberData={members} removeMember={this.removeMember} />
    <h2>New Member</h2>
    <Form handleSubmit={this.handleSubmit} />
    </div>
    )
  }
}
export default App
