import React,{Component} from "react";
import {MDBBtn, MDBInput,Table,MDBRow, MDBCol, MDBCard, MDBCardBody,MDBIcon, MDBView, MDBBadge } from "mdbreact";
import {MDBCardHeader,MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';


  const data_panel = {
    columns: [
      {
                'label': 'Items',
                'field': 'I',
                'sort': 'asc'
              },      
              {
                'label': 'Quantity',
                'field': 'Q',
                'sort': 'asc'
              },
              {
                'label': 'Price',
                'field': 'pr',
                'sort': 'asc'
              },
               {
                 'label': 'Total',
                 'field': 'total',
                 'sort': 'asc'
               },
    ],
    rows: [
      {
                'items': 'Mark',
                'quantity': 'Otto',
                'price': '@mdo',
                'total': 'Mark',
                
              },
              {
                'items': 'Mark',
                'quantity': 'Otto',
                'price': '@mdo',
                'total': 'Mark',
                
              },
              {
                'items': 'Mark',
                'quantity': 'Otto',
                'price': '@mdo',
                'total': 'Mark',
                
              },
              {
                'items': 'Mark',
                'quantity': 'Otto',
                'price': '@mdo',
                'total': 'Mark',
                
              }
    ]
  };
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <MDBCard
            className="my-5 px-5 mx-auto" fixed
            style={{ fontWeight: 300, maxWidth: "70%",maxHeight:"20%" }}
          >
            <MDBCardBody style={{ paddingTop: 0 }}>
            <div className="blue-gradient rounded-top text-center ">
                 <h2 className="option" style={{padding: "2.5rem",marginBottom: 0,fontWeight: 500}}>
                      Current Order
                 </h2>
            </div>     
             <MDBRow>
                <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                  <MDBRow className="mb-3">
                    <MDBCol size="12">
                       <MDBView hover rounded className="z-depth-1-half mb-4">   
                       </MDBView>
                        <MDBBadge color="aqua-gradient">
                          <MDBIcon className="pr-2" aria-hidden="true" />
                          About
                        </MDBBadge>  
                    </MDBCol>
                  </MDBRow>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate">
                      <div className="font-weight-bold"></div>
                  <Table className="font-weight-bold">
                             <thead>
                               </thead>
                              
                                 <tbody>
                                 <tr>
                                   <th scope="row"> <strong>Name </strong></th>
                                   <td>Maissaa</td>
                                 </tr>
                                 <tr>
                                   <th scope="row"><strong>OrderID</strong></th>
                                   <td>45</td>
                                 </tr>
                                 <tr>
                                   <th scope="row"><strong>Date </strong></th>
                                   <td>12/7/2019</td>
                                 </tr>
                                 <tr>
                                   <th scope="row"> <strong>Delivery Date</strong></th>
                                   <td>16/7/2018</td>
                                 </tr>
                                 <tr>
                                   <th scope="row"><strong>Delevery Time</strong></th>
                                   <td>1:00pm</td>
                                 </tr>
                               
                               </tbody>
                          </Table>
                  
                    </MDBCol>
                  </div>
                 </MDBCol>
      
                <MDBCol> 
                  <MDBView hover rounded className="z-depth-1-half mb-4">   
                  </MDBView>
                  <MDBRow className="mb-3">
                    <MDBCol size="12">
                        <MDBBadge color="aqua-gradient">
                          <MDBIcon className="pr-2" aria-hidden="true" />
                          Status
                          </MDBBadge>
                          <div className="font-weight-bold">
                  <div className="d-flex justify">
                  <MDBCol size="11" className="text d-flex">
                    <div>  <MDBBtn gradient="blue" size="sm">Pending</MDBBtn>
                    <MDBInput type="Checkbox" disabled id="radio3" value="1" /> </div>
                     <div><MDBBtn gradient="blue" size="sm">Processing</MDBBtn>
                    <MDBInput type="Checkbox" disabled id="radio3" value="1" /></div>
                    <div><MDBBtn gradient="blue" size="sm">Done</MDBBtn>
                    <MDBInput type="Checkbox" disabled id="radio3" value="1" /></div>
                  </MDBCol>
                      </div>
                      </div>     
                   </MDBCol>
               </MDBRow>                 
                </MDBCol>
                <MDBCol>
                <MDBView hover rounded className="z-depth-1-half mb-4">   
                  </MDBView>
                  <MDBRow className="mb-3">
                    <MDBCol size="12">
                        <MDBBadge color="aqua-gradient">
                          <MDBIcon className="pr-2" aria-hidden="true" />
                          Priority
                          </MDBBadge>
                     </MDBCol>
                 
                  <div className="font-weight-bold">
                  <div className="d-flex justify">
                    <MDBCol size="11" className="text-truncate d-flex pl-0 mb-3">
                  <div> <MDBBtn gradient="blue" size="sm">Priority</MDBBtn>
                        <MDBInput type="Checkbox" disabled id="priority" value="1" /></div>
                    </MDBCol>
                   </div>
                  </div>
                  </MDBRow>
                </MDBCol>
                </MDBRow>
      
            </MDBCardBody>
      
      
            <MDBRow>
            <MDBCard >
            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">     
              <MDBTable btn  fixed>
              <MDBTableHead  classname="font-weight-bold blue-gradient" columns={data_panel.columns} />
                <MDBTableBody rows={data_panel.rows} />
              </MDBTable>
              </MDBCardHeader>
      
              <div className="blue-gradient rounded-right text-center db-flex ">
             <MDBTableBody style={{align:"center"}}>TOTAL :<strong>200</strong> </MDBTableBody></div>
          </MDBCard>
      
      
            </MDBRow>
      <MDBRow> <MDBBtn className="center" gradient="blue" size="LG">OK</MDBBtn></MDBRow>
          </MDBCard>
        );
      }

}
 
export default Order;