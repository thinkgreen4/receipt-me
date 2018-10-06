import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/api.js";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Receipt from "../../components/Receipt";
import Camera from '../../components/CameraCapture';
import ImgRecognition from '../../components/Tesseract';
import Tesseract from 'tesseract.js';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import {faCameraRetro} from '@fortawesome/free-solid-svg-icons'
import{faEnvelope} from '@fortawesome/free-solid-svg-icons'
import CamIcon from "../../components/CamIcon/CamIcon"
import Envelope from "../../components/Envelope/Envelope"
// library.add(faStroopwafel)
library.add(faCameraRetro)
library.add(faEnvelope)

class Main extends Component {
  state = {
    receipts: [],
    openCameraState: false
    
  };
  
    ProcessOCR = (myImage) => {
      Tesseract.recognize(myImage)
   .then(function(result){
       console.log(result)
   });
  }
  
    openCamera = (event) => {
      event.preventDefault()
      this.setState({
        openCameraState: true
      });
    }
    closeCamera = (event) => {
      event.preventDefault()
      this.setState({
        openCameraState: false
      });
    }
  componentDidMount() {
    this.loadReceipts();
  }

  loadReceipts = () => {
    API.getReceipts()
      .then(res => this.setState({ receipts: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
            {/* <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form> */}
          </Col>
          <Col size="md-12 sm-12">
            {/* <Jumbotron> */}
            <Row>
              <Col size="md-8 sm-12">
              <h1 id="monthtext">October Receipts</h1>
              </Col>
              <Col size="md-2 sm-6">
              <CamIcon></CamIcon>
              </Col>
              <Col size="md-2 sm-6">
              <Envelope></Envelope>
              </Col>
            </Row>
            
              
              
            {/* </Jumbotron> */}
            {this.state.receipts.length ? (
              <List>
                {this.state.receipts.map(receipts => (
                  <ListItem key={receipts._id}>
                    <a href={"/receipt/" + receipts._id}>
                      <strong>
                        {receipts._id} by
                         {/* {receipts.img} */}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <div>
        <button onClick={this.openCamera}>Take Photo</button>
        <button onClick={this.closeCamera}>Close</button>
        <button onClick={this.processOCR}>Scan</button>
          {this.state.openCameraState && <Camera processOCR={this.ProcessOCR}/>}
        </div>
        </Row>
      </Container>
    );
  }
}

export default Main;
