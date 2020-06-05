import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/home.css';

export default function Home() {
    return (
        <div className="home mt-2">
  
  <div className="row">
    <div className="col-md-5 col-pix p-0
    mb-4 ml-4">
  <div className="card">
  
  <div className="card-body">
    
    <Carousel className="imgs">
  <Carousel.Item>
    <img
      className="d-block pic w-100 "
      src={require("./asserts/pic2.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block pic w-100  "
      src={require("./asserts/pic1.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
  </div>
  </div>
  </div>
  <div className="col-md-5 col-calendar text-center">
    <div className="calendar">
    <Calendar />
    </div>
  
  </div>
      
  </div>
  <hr></hr>

  <h3 className="text-center headings ">Daily Quotes</h3>
  <hr style={{margin:"0 25em 0 25em"}} ></hr>

<div className="school-qoute text-center">
  <img src={require("./asserts/quotepic.png")} className="quote-pic" alt="" />
  <p className="quote-text" >"Knowledge is power. Information is liberating. <br></br>
    Education is the premise of progress, in every society,
    <br></br>
     in every family." Kofi Annan
</p>

</div>

<hr></hr>
<h3 className="text-center headings ">Subjects</h3>
  <hr style={{margin:"0 25em 0 25em"}} ></hr>




  <div className="banner-section mt-4 spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 m-4 col-sciences p-0 ">
                <div className="card card-subjects  mr-2">
                 <div className="card-body">
                            <h5 className="text-success">Mathematics</h5>
                            <p>View More</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 m-4 col-languages p-0">
                <div className="card card-subjects mr-2">
                <div className="card-body">
                            <h5 className="text-warning">Integrated Science</h5>
                            <p>View More</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 m-4 col-view p-0">
                <div className="card card-subjects mr-2">
                  <div className="card-body ">
                         <h5 className="text-primary">Other Subjects</h5>
                            <p>View More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr></hr>
<h3 className="text-center headings ">Events and Activites</h3>
  <hr style={{margin:"0 25em 0 25em"}} ></hr>

  <div className="banner-section mt-4 spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 m-4 col-sciences p-0 ">
                <div className="card card-subjects  mr-2">
                 <div className="card-body">
                            <h5 className="text-success">Sports</h5>
                            <p>View More</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 m-4 col-languages p-0">
                <div className="card card-subjects mr-2">
                <div className="card-body">
                            <h5 className="text-warning">Arts and Culture</h5>
                            <p>View More</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 m-4 col-view p-0">
                <div className="card card-subjects mr-2">
                  <div className="card-body ">
                         <h5 className="text-primary">Other Activites</h5>
                            <p>View More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


            
        
    )
}
