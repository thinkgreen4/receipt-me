// import React from "react";
import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import "../../components/Signup/Signup";
import API from '../../utils/api.js';
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Create extends Component {
  // Setting our component's initial state
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="firstName (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="lastName (required)"
              />
               <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="userName (required)"
              />
               <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
               <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.userName && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Create User
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Create;
// class Signup extends Component {
//   onSubmit() {
//     // Do stuff with the photo...
//     console.log('takePhoto');
//     console.log(dataUri);
//     console.log(this.props.processOCR);
//     this.props.processOCR(dataUri)
//     API.saveReceipt({img: dataUri}).then((res) => {
//       console.log("this is image" + res);
//     })

//   }
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// const Signup = () => (
//   <form action="/submit" method="post">
//     <div className="form-row">
//       <div className="form-group col-md-12">
//         <label htmlFor="inputCity">First Name</label>
//         <input type="text" name="firstname" className="form-control" id="firstName" placeholder="First Name"></input>
//       </div>
//     </div>
//     <div className="form-row">
//       <div className="form-group col-md-12">
//         <label htmlFor="inputCity">Last Name</label>
//         <input type="text" name="lastname" className="form-control" id="lastName" placeholder="Last Name"></input>
//       </div>
//     </div>
//     <div className="form-row">
//       <div className="form-group col-md-12">
//         <label htmlFor="inputCity">Username</label>
//         <input type="text" name="username" className="form-control" id="username" placeholder="Username"></input>
//       </div>
//     </div>
//     <div className="form-row">
//       <div className="form-group col-md-12">
//         <label htmlFor="inputEmail4">Email</label>
//         <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
//       </div>
//     </div>
//     <div className="form-row">
//       <div className="form-group col-md-12">
//         <label htmlFor="inputPassword4">Password</label>
//         <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password"></input>
//       </div>
//     </div>
//     <div className="form-group">
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" id="gridCheck"></input>
//         <label className="form-check-label" htmlFor="gridCheck">Remember Me
//       </label>
//       </div>
//     </div>
//     <button type="submit" className="btn btn-primary submit-btn">Create User</button>
//    <input type="submit"></input>
// </form>
// );

// export default Signup;
