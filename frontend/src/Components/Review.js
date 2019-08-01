import React from "react";
import  "./Review.css";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import {MDBRow,MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';

const Review = () => {
  return (
    
    <div class="d-flex justify-content-center">
          <MDBCard>
            <div className="header pt-3 blue lighten-2">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                   Feed Back
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
            <div className="starrater">
            <Rater total={5} rating={0} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                </label>
                <textarea
                placeholder="Leave A Comment"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                />
            </div>
            <div className="Buttons">
            <div className="btnfontsize">
            <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Submit
                </MDBBtn>
            </div>

            <div className="btnfontsize">
            <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Cancel
                </MDBBtn>
            </div>
            </div>
            </MDBCardBody>
          </MDBCard>
    </div>
  );
};

export default Review; 