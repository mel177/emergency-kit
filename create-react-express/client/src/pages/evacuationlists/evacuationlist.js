import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input,  FormBtn } from "../../components/Form";

class evacuationlists extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.loadEvacuationlists();
    }


loadEvacuationlists = () => {
  console.log("Hello")
  API.getAllEvacuationLists()
    .then(res =>{
      console.log("RES TO FRONT END--- ",res)
        this.setState({ items: res.data})
    }
        )
    .catch(err => console.log(err));
};

deleteEvacuationlists = id => {
  console.log("Thing clicked!!!!", id)
    API.deletelists(id)
    .then(res => API.getAllEvacuationlists())
    .catch(err => console.log(err));
};
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.item) {
      API.saveEvacuationlists({
        items: this.state.items,
        
      })
        .then(res => this.loadEvacuationlists())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
         
          <Col size="md-6">
            <Jumbotron>
              <h1>Evacuation Kit</h1>
            </Jumbotron>
            <form>
              <Input name="item" placeholder="Evacuation Items (required)" />
              
              <FormBtn>Submit Item</FormBtn>
            </form>
            
            {this.state.items.length ? (
              <List>
                {this.state.items.map(items => (
                  <ListItem key={items._id} id={items._id} item={items.item} onClick={this.deleteEvacuationlists}>
                  <a href={"/evacuationlists/" + items._id}>
   
                  </a>
                  <DeleteBtn  />
                  </ListItem>

                )
                 
                   
                  
                )}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
      </Container>
    );
  }
}

export default evacuationlists;