import React, { Component } from 'react';
import {MDBIcon ,MDBInput,MDBFormInline,MDBBadge, MDBBtn , MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardFooter} from "mdbreact";


class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
      items: [
        {
          id: 1,
          click: 0
        },
        {
          id: 2,
          click: 0
        },
        {
          id: 3,
          click: 0
        },
        {
          id: 4,
          click: 0
        },
        {
          id: 5,
          click: 0
        },

        {
          id: 6,
          click: 0
        }
      ]
    };
  }

  IncrementItem = (id) => {
    const oldItems  = this.state.items;
    const new_items = oldItems.map(item => {

      if(item.id === id) {
        item.click += 1;
      }
      return item;
    })
    console.log(new_items)
    this.setState({ items: [...new_items] });
  }
  DecreaseItem = (id) => {
    const oldItems  = this.state.items;
    const new_items = oldItems.map(item => {

      if(item.id === id && item.click > 0) {
        item.click -= 1;
      }
      return item;
    })
    console.log(new_items)

    this.setState({ items: [...new_items] });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
  <div>  
    <MDBCard
      className="my-5 px-5 mx-auto" fixed
      style={{ fontWeight: 300, maxWidth: "80%",maxHeight:"20%",padding:"0.5rem" }}>
      <MDBCardBody style={{ paddingTop: 0 }}>
      <div className="blue-gradient font-weight-bold rounded-top text-center ">
           <h6 className="option" style={{padding: "0.5rem",marginBottom: 0,fontWeight: 500}}>
              <strong>  New Order </strong> 
           </h6>
      </div>
    
    <MDBRow> 
        <MDBFormInline className="md-form mr-auto mb-4">
             <input className="form-control mr-sm-2" type="text" placeholder="Name" aria-label="Search" />
             <input className="form-control mr-sm-2" type="text" placeholder="Middle Name" aria-label="Search" />
             <input className="form-control mr-sm-2" type="text" placeholder="Last Name" aria-label="Search" />
              <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                   Search
               </MDBBtn>
            <div className="d-flex justify">
              <MDBCol size="12" className="text-truncate d-flex">
                  <MDBBtn gradient="blue" size="sm">Priority</MDBBtn>
                  <MDBInput type="Checkbox" disabled id="priority" value="1" />
              </MDBCol>
            </div>       
         </MDBFormInline>  
    </MDBRow> 
          
    <MDBRow>
    <section className="text-center">
      <MDBRow>
      {
        this.state.items.map(item => {

          return (
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard  className="card-image"
            style={{
              backgroundImage:
                'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg")' , height:"13rem" , width: "15rem"}}
            > <h5 className="mb-4">
            <div className="price header white-text  rounded-top d-flex justify-content-top" style={{padding:'0px',height:'22px'}}>
                  <div className="d-flex justify-content-left "><MDBBadge pill color="blue"><h9>JEANS</h9> </MDBBadge></div>
                  <div className="d-flex justify-content-right "><MDBBadge pill color="blue"><h9>9$</h9> </MDBBadge></div>
              </div>
            </h5>
            <MDBCardBody className="BLUE-text d-flex">
            </MDBCardBody> 
            <MDBCardFooter>
            <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                <MDBIcon icon="minus-circle" size="lg" className="light-blue-text" onClick={()=> {
                  this.DecreaseItem(item.id)
                }} />
                   <strong><h2> { this.state.show ? <h2>{item.click }</h2> : '' } </h2></strong> 
                <MDBIcon icon="plus-circle" size="lg" className="light-blue-text" onClick={()=> {
                  this.IncrementItem(item.id)
                }} />
            </div></div>
            </MDBCardFooter>
               <MDBBtn  className="card-circle d-flex justify-content-center align-items-right" rounded color="blue">
                Buy now
              </MDBBtn>
          </MDBCard>
        </MDBCol>

          )
        })
      }
      </MDBRow>
    </section>
  </MDBRow>
  </MDBCardBody>
  <MDBRow> <MDBBtn className="justify-content-center" gradient="blue" size="LG">Finish</MDBBtn>
   <MDBBtn className="justify-content-center" gradient="blue" size="LG">Edit</MDBBtn></MDBRow>

  </MDBCard>
  </div>
    );
  }
}
   export default NewOrder;