import React,  { Component } from 'react';

class NewProjectContainer extends Component {
   constructor() {
      super();
      this.state = {
         title: "",
         description: "",
         difficulty: "",
         owner_id: ""
      };
   }
}

export default NewProjectContainer;