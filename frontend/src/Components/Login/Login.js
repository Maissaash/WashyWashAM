import React,{Component} from "react";
import "./Login.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { ToastContainer, toast } from "react-toastify";


class FormPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
     
      email: '',
      password: '',
      error_message: "",
      isLoading: false,
      nickname: null,
      token: null
      
    }
  }

  





 
  login = async (params)=>{
    const {email,password}=params;
    const body = new FormData();
    body.append('email',email);
    body.append('password',password);
      const fet = await fetch('http://localhost:8000/api/login',{
        method:"POST",
        body: body
      })
      const res = await fet.json();
      console.log('res', res)
  

    if(res.error) {
      alert('Your Email or Password Worng')
      toast("Contacts loaded!");
    }else {
     localStorage.setItem('token',res.token);

     const roles = res.user.roles;

     const admin = roles.find((role) => {
       return role.id === 1;

     })

     const employee = roles.find((role) => {
      return role.id === 2;
    })


    const customer = roles.find((role) => {
      return role.id === 3;
    })

    if(admin){
      this.props.history.push('/employees')

    } else if (employee){
      this.props.history.push('/employees')

    }else if(customer){
      this.props.history.push('/customers')

    }


    }

  

  
   

    }


 onSubmit = event =>{
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password
        this.login({email,password,event})
      }

      
  render(){
    
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form noValidate>
            <p className="h5 text-center mb-4" style={{fontSize:"20px"}}>Log In</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}
              required
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
            </div>
            <div className="text-center">
            <MDBBtn gradient="aqua" onClick = {this.onSubmit} >Submit</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}};
export default FormPage;