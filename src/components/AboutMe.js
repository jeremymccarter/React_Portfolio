import React from 'react';
import avi from '../imgs/avi.jpg'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  
  export default function AboutMe() {
    return (
      <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                {/* <MDBBreadcrumbItem>
                  <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem> */}
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
  
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    src = {avi}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Cat dad</p>
                  <div className="d-flex justify-content-center mb-2">
                    {/* <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>https://jeremymccarter.github.io/React_Portfolio/</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                      <MDBCardText>/jeremymccarter</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                      <MDBCardText>@jeremymccarter27</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                      <MDBCardText>jermstat</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                      <MDBCardText>Jeremy McCarter</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Jeremy McCarter</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">jeremymccarter27@gmail.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(208) 871-7788</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  {/* <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr /> */}
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Monterey, CA</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
  
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">likes</span></MDBCardText>
                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Coding</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={99} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Camping</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Playing guitar</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Basketball</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={75} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Interesting people</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={88} valuemin={0} valuemax={100} />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
  
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">dislikes</span></MDBCardText>
                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Bad drivers</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={11} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Grumps</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={6} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Wet socks</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={12} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>The golden state warriors</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={25} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Cabbage</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={44} valuemin={0} valuemax={100} />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }

// export default AboutMe