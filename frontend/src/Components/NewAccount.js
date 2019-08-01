import React, { Component } from "react";


import {
  MDBFormInline,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody} from "mdbreact";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";


class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      password: "",
      roles: []
    };
  }
  newAccount = async params => {
    const token = localStorage.getItem("token");
    const {
      first_name,
      middle_name,
      last_name,
      email,
      password,
      roles
    } = params;
    let body = {
      first_name: first_name,
      last_name: last_name,
      middle_name: middle_name,
      email: email,
      password: password,
      roles: roles
    };
    console.log(body);
      fetch("http://localhost:8000/api/v1/users", {
        method: "POST",
        // mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(body)
      }).then(response => response.json())
      .then(data => {

        console.log(data);
        // window.location.reload();
       alert("this made successfully")
        
      }
        ).catch(err => {
          console.log('err', err)
        })
     
  };

  handelSubmit = event => {
    event.preventDefault();
    //  let first_name  = this.state.first_name;
    //  let middle_name = this.state.middle_name;
    //  let last_name = this.state.last_name;
    //  let email = this.state.email;
    //  let password = this.state.password;
    //  let roles = this.state.roles;
    this.newAccount(this.state);
    //  window.location.reload(); 
  };

  onChangeRole = event => {
    let roles = [event.target.value];
    this.setState({ roles });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="9">
            <MDBCard>
              <MDBCardBody className="mx-5">
                <p className="h3 text-center form-header blue-gradient rounded">
                  Create New Account
                </p>
                <div className="grey-text">
                  <MDBFormInline className="md-form mr-auto mb-4">
                    <MDBInput
                      icon="user"
                      className="form-control mr-sm-2"
                      type="text"
                      label="Name"
                      aria-label="Search"
                      onChange={e =>
                        this.setState({ first_name: e.target.value })
                      }
                    />
                    <MDBInput
                      className="form-control mr-sm-2"
                      type="text"
                      label="Middle Name"
                      aria-label="Search"
                      onChange={e =>
                        this.setState({ middle_name: e.target.value })
                      }
                    />
                    <MDBInput
                      className="form-control mr-sm-2"
                      type="text"
                      label="Last Name"
                      aria-label="Search"
                      onChange={e =>
                        this.setState({ last_name: e.target.value })
                      }
                    />
                  </MDBFormInline>
                  <div>
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>{" "}
                </div>

                <MDBDropdown>
                  <MDBDropdownToggle caret color="primary">
                    MDBDropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic onClick={this.onChangeRole}>
                    <MDBDropdownItem value={1}>Admin</MDBDropdownItem>
                    <MDBDropdownItem value={2}>Employee</MDBDropdownItem>
                    <MDBDropdownItem value={3}>Customer</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <div className="text-center db-flex">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.handelSubmit}
                  >
                    Register
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default NewAccount;
