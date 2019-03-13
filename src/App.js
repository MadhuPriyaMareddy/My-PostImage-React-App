import React, { Component } from 'react';
import { Container, Row, Col,FormGroup,Input,Button,Card,CardHeader } from 'reactstrap';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            singlePost: {
                image_url:'',
                title:''
            }

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleClick() {
        if(this.state.singlePost.image_url  !== '' && this.state.singlePost.image_url  !== undefined){
            this.setState({ posts: [...this.state.posts, this.state.singlePost]});
            this.setState({singlePost: []});
        }

    }

    handleChange(event) {
        const inputKey = event.target.name;
        this.setState({singlePost: {...this.state.singlePost,[inputKey]: event.target.value} });
    }



    render() {
      const myPosts = this.state.posts.reverse().map((post,index) => (
          <Card body inverse color="success" key={index} className="mt-5">
              <CardHeader>{post.title}</CardHeader>
              <img src={post.image_url} width="100%"/>
          </Card>
      ));
    return (
      <div className="App">
          <Container>
              <Row>
                  <Col xs="3"></Col>
                  <Col xs="6" className="mt-5 justify-content-center">
                      <FormGroup row>
                          <Col sm={12}>
                              <Input type="text" name="image_url" id="image_url" placeholder="Enter Image path" onChange={this.handleChange}   />
                          </Col>
                      </FormGroup>
                      <FormGroup row>
                          <Col sm={12}>
                              <Input type="text" name="title" id="title" placeholder="Enter Post Title" onChange={this.handleChange}   />
                          </Col>
                      </FormGroup>
                      <FormGroup row>
                          <Col sm={12}>
                      <Button color="primary" onClick={this.handleClick}>Post Image</Button>
                          </Col>
                      </FormGroup>
                  </Col>
                  <Col xs="3"></Col>
              </Row>
          </Container>
          <Container>
          <Row>
              <Col xs="3"></Col>
              <Col xs="6" className="bg-light mt-5">
                  {myPosts}
              </Col>
              <Col xs="3"></Col>
          </Row>
          </Container>
      </div>
    );
  }
}

export default App;
