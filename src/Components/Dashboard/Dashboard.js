import React, { Component } from 'react';
import DoctorList from './DoctorList';
import Profile from './profile';
import avatar from './avatar.svg';

const Doctors = [
  {
    name: 'Don Williams',
    occupation: 'Ganacologist',
    avatar: avatar,
    key: 1,
    id: 1 
  },
  {
    name: 'Don Williams',
    occupation: 'Ganacologist',
    key: 2,
    avatar: avatar,
    id: 2 
  },
  {
    name: 'Don Williams',
    occupation: 'Ganacologist',
    key: 2,
    avatar: avatar,
    id: 2 
  }
]

class Dashboard extends Component{
  constructor(props) {
    super(props);

    this.state={
      date:''
    }

    this.grabDate = this.grabDate.bind(this);
    
  }

  grabDate(e) {
    console.log(this.state);
    this.setState({
      date: e.target.value
    })
  } 

  render() {
    return(
      <>
        <div className="dashboard-cont">
          <Profile />
          <h2>Find A Doctor</h2>
          <div className="doctors-cont">
            <DoctorList state={this.state} Doctors={Doctors} grabDate={this.grabDate}/> 
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard;