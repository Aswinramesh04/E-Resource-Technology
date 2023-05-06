import React from 'react';

function Banner()
{
  
 return(
  <React.Fragment>
  
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">   
  
    <div className="carousel-item active"> 
      <img src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" 
      width={"100%"} height={"600px"}
      style={{
        objectFit:"cover",
        objectPosition:"50% top",
      }} alt='...'/>
    </div>
      <div className="carousel-item ">
      <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg" className="d-block w-100" alt='...'
      height={"600px"}
      style={{
        objectFit:"cover",
      }}/>
    </div>
    <div className="carousel-item "> 
       <img src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt='...'
       height={"600px"}
       style={{
        objectFit:"cover",
      }}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </React.Fragment>

 );
}
export default Banner;