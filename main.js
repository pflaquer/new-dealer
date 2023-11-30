const navBar = ()=>{
  return `
  
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-gradient">
     <div class="topnav">
<div>
     <ul class="navbar-nav sm-icons">
     
      <a class="nav-link" style="color:white;font-weight:400;" href="tel:"><i class="bi bi-geo-alt-fill"></i>15028 Hwy 99</a></li>
     
     <ul class="navbar-nav sm-icons">
     <a class="nav-link" href="tel:2065555555"><i class="bi bi-envelope"></i> </a></li>
     <li><a class="nav-link" href="tel:2065555555"><i class="bi bi-phone"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-facebook"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-instagram"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-twitter"></i></a></li>
        
      </ul>
      
  
     
       <hr style="color:red;margin-top:-2px;height:10px;">
     </div>
     </div>
     <hr style="color:red;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="logo" src="https://raw.githubusercontent.com/pflaquer/dealer-site/main/logo_recon.png"></img></a>
      <button class="navbar-toggler bg-primary bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#main">Used Autos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d">Contact Us</a>
          </li>
        </ul>
        
        
        
       
      </div>
    </div>
  </nav>
  

   
    <hr>
     <hr>
  `
}


const hero = ()=>{
  return `
  
  <div style="height: 100vh; background-image: url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/01_08_urus_focus/urus_focus_cover.jpg); background-size: cover; background-position: center;" class="position-relative w-100">
  <div class="position-absolute text-white d-flex flex-column align-items-start justify-content-center" style="top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0,0,0,.7);">
    <div class="container">
      <div class="col-md-6">
        <span style="color: yellow;" class="btn btn-primary"><i class="bi-star"></i> <i class="bi-star"></i> <i class="bi-star"></i> <i class="bi-star"></i> <i class="bi-star"></i></span>
        <!-- on small screens remove display-4 -->
        <h1 class="mb-4 mt-2 display-4 font-weight-bold"><span style="color: white;">USED AUTOS IN LYNNWOOD WA</span></h1>
        <p  style="color: white;"><i class="bi-check"></i> Quality Used Affordable Vehicles, Serving The Greater Seattle Region</p>
        <div class="mt-5">
          <!-- hover background-color: white; color: black; -->
          <a href="#inventory" class="btn btn-outline-danger px-5 py-3 text-white mt-3 mt-sm-0" style="border-radius: 30px; background-color: red;">CHECK INVENTORY</a>
        </div>
      </div>
    </div>
  </div>
</div>
  
  `
  
}

const card = (img,makeandmodel,id,description,miles,type)=>{


  return `
  
  <div class="col-sm-4">
    <div class="card mt-2">
      <div class="card-body">
      <img src=${img} width="100%" height="55%"></img>
        <h5 class="card-title">${makeandmodel}</h5>
        <p class="card-text"><span class="badge badge-warning">$6,955.00</span></p>
        
        <p class="card-text float-left">ID: ${id}</p>
        <p class="card-text">${description}</p>
       
         <code class="card-text">Mileage: ${miles}</code>
         <br>
         <code class="card-text">Type: ${type}</code>
         <br>
        </div>
        <div class="card-footer bg-transparent border-secondary">
        <a onclick="alert('working')"  style="width:8rem;" class="btn btn-secondary" >VIEW MORE</a>
        <a onclick="alert(${JSON.stringify(this.innerHTML)})" class="btn btn-danger">INQUIRE</a>
        </div>
      
    </div>
  </div>

  `
}
  

const filterbar = ()=>{
  
 return `
  <center>
  <div class="filterbar">
  <div><h1><i class="fa-solid fa-car"></i></h1></div>
    <div><h1><i class="fa-solid fa-car"></i></h1></div>
    <div><h1><i class="fa-solid fa-car"></i></h1></div>
    <div><h1><i class="fa-solid fa-car"></i></h1></div>
</div>
</center>
  
  `
}


const main = ()=>{
  return `
  
  <main class="layout-main" id="main">
<div class="container-fluid bg-primary bg-gradient" style="height:75px;">
<div class="row gx-5">
<div class="col-4 text-center bg-primary bg-gradient float-start">


</div>
<div class="col-8 text-center bg-primary bg-gradient">

${filterbar()}
  <!--
  <label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
--></div>
</div>
</div>
<div class="row gx-5">
<div class="col-md-3 text-center bg-light">

  <!-- Ad Goes Here --><center>
  <div class="card w-75 justify-content-center mt-4" >
  <img class="card-img-top" src="https://www.kbb.com/wp-content/uploads/2021/01/car-buying-couple.jpeg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">WHY BUY FROM US?</h5>

<ul style="float:left;">
<li><i class="fa-regular fa-square-check"></i> 100% Guarantee</li>
<li><i class="fa-regular fa-square-check"></i> Quality Vehicles</li>
<li><i class="fa-regular fa-square-check"></i> Affordable Prices</li>
<li><i class="fa-regular fa-square-check"></i> Reputable Dealer</li>

</ul>

</div>
</div>
  </center>
  <!-- Ad Goes Here -->
  
  
  
  
  
  
  
  
  
</div>
  
<div class="col-md-9 text-center bg-dark">
<center>
  <div class="container">  
<div class="row">

${card("https://car-dealership-omega.vercel.app/assets/car-16-c9c1bce3.jpg", "Jeep Trailhawk SRT",192,"Excellent Condition",28374,'SUV')}

${card("https://car-dealership-omega.vercel.app/assets/car-16-c9c1bce3.jpg", "Jeep Trailhawk SRT",192,"Excellent Condition",28374,'SUV')}

${card("https://car-dealership-omega.vercel.app/assets/car-16-c9c1bce3.jpg", "Jeep Trailhawk SRT",192,"Excellent Condition",28374,'SUV')}

${card("https://car-dealership-omega.vercel.app/assets/car-16-c9c1bce3.jpg", "Jeep Trailhawk SRT",192,"Excellent Condition",28374,'SUV')}

${card("https://car-dealership-omega.vercel.app/assets/car-16-c9c1bce3.jpg", "Jeep Trailhawk SRT",192,"Excellent Condition",28374,'SUV')}

${card("https://car-dealership-omega.vercel.app/assets/car-16-c9c1bce3.jpg", "Jeep Trailhawk SRT",192,"Excellent Condition",28374,'SUV')}


</div> 
</div>
</div>
<div class="col-4 text-center bg-information">
</div>
<div class="col-8 text-center bg-information">
<nav aria-label="Page navigation example">
<ul class="pagination">
<li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>      
</div>
</div>
</div>
</div>
</div>
</main>
  
  
  `
  
}

const footer=()=>{
  return `
  
  <div class="footer">
            <div class="container">     
                <div class="row">                       
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Used Autos</a></li>
                                <li><a href="#">About Us</a></li>
                               <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Schedule an Appointment</a></li>
                             
                            </ul>
                        </div>
                    </div><!--- END COL --> 
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Technical Links</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                
                             
                            </ul>
                        </div>
                    </div><!--- END COL -->
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    <input type="text" class="subscribe__input" placeholder="Enter Email Address">
                                    <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                 <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                                 <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                                 <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                               
                            </ul>
                        </div>                          
                    </div><!--- END COL -->         
                </div><!--- END ROW --> 
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <code><p class="copyright">Copyright © 2023 Auto Recon USA<br>
                        Site Designed By <a href="https://www.pxdr0.com">PXDR0</a>.</p></code>
                    </div><!--- END COL -->                 
                </div><!--- END ROW -->                 
            </div><!--- END CONTAINER -->
        </div>
  
  
  `
  
  
}


function App(){
  return `
  ${navBar()}
   ${hero()}
   ${main()}
   ${footer()}
   
  
  
  `
}

document.getElementById("root").innerHTML = App()
