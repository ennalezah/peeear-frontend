import React, { Component } from 'react';

class UsersContainer extends Component {
   displayUsers = () => {
      // let users = this.props.usersData.users
      // console.log(users)
      return this.props.usersData.users.map(user => {
         return (
            <div key={user.id}>
               <h3>{user.first_name} {user.last_name[0]}.</h3>
               <p>{user.email}</p>
            </div>
         )
      })
   }

   render() {
      return(
         <div>
            <h3>Users</h3>
             {this.displayUsers()}
         </div>
      )
   }
}

export default UsersContainer;