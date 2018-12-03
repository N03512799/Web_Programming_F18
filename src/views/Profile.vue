
<template>
<div class= "container-fluid"> 
	<div class = "row d-fluid">
		<div class="col-lg-3 bg-dark order-2 order-lg-1 m-auto py-4 text-center ">
			<h3 class="display-4 text-white">Workouts</h3>
			<hr class="bg-light">
			<div id="upper carousel" class="carousel slide py-3" data-ride="carousel">
  			<div class="carousel-inner">
    			<div class="carousel-item active pic">
				    <img class="d-block w-100" :src="cardio" alt="First slide">  						
            <div class="overlay"></div>
					</div>
    			<div class="carousel-item pic">
      			<img class="d-block w-100" src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\upper1.jpg" alt="Second slide">	
						<div class="overlay"></div>
					</div>
          <div class="carousel-item pic">
      			<img class="d-block w-100" src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\upper2.jpg" alt="Third slide">
						<div class="overlay"></div>
  				</div>
				</div>
			</div>
			<div id="core carousel" class="carousel slide py-3" data-ride="carousel">
  			<div class="carousel-inner">
    			<div class="carousel-item active pic">
      			<img class="d-block w-100" src="cardio" alt="First slide">						
						<div class="overlay"></div>
					</div>
    			<div class="carousel-item pic">
      			<img class="d-block w-100" src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\core1.jpg" alt="Second slide">
       			<div class="overlay"></div>
					</div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\core2.jpg" alt="Third slide">						
							      <div class="overlay"></div>
						</div>
  					</div>
				</div>
				<div id="lower carousel" class="carousel slide py-3" data-ride="carousel">
  					<div class="carousel-inner">
    						<div class="carousel-item active">
      							<img class="d-block w-100 " src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\lower.jpg" alt="First slide">						
                    <div class="overlay"></div>
						    </div>
    						<div class="carousel-item">
      							<img class="d-block w-100 " src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\lower1.jpg" alt="Second slide">
       							<div class="overlay"></div>
						    </div>
    						<div class="carousel-item">
      							<img class="d-block w-100 pic" :src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\lower2.jpg" alt="Third slide"/>						
							      <div class="overlay"></div>
						</div>
  					</div>
				</div>
				<div id="cardio carousel" class="carousel slide py-4" data-ride="carousel">
  					<div class="carousel-inner">
    						<div class="carousel-item active pic">
      							<img class="d-block w-100" src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\public\workouts\cardio.jpg" alt="First slide">						
							      <div class="overlay"></div>
						    </div>
    						<div class="carousel-item">
      							<img class="d-block w-100 pic" src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\cardio1.jpg" alt="Second slide">
       							<div class="overlay"></div>
						    </div>
    						<div class="carousel-item">
      							<img class="d-block w-100 pic" src="C:\Users\sdmit\OneDrive\Documents\Web Programming\Web_Programming_F18\img\workouts\cardio2.jpg" alt="Third slide">						
							      <div class="overlay"></div>
						    </div>
  					</div>
				</div>
			</div>
			<div class="col-lg-6 text-center bg-info order-1 order-lg-2  ">
        <h1 class="display-2">Profile</h1>
				<div class="container-fluid">
					<div class="jumbotron jumbotron-fluid my-4">
                <div class="container">
                  <h1 class="display-4">Fluid jumbotron</h1>
                  <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
					</div>
				</div>
				<div class="row">

				</div>
			</div>
			<div class="col-lg-3 bg-success order-3 m-auto py-4 text-center">
				<h3 class="display-4 text-white">Friends</h3>
				<div class="card m-auto py-5">
            <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
				</div>
			</div>
		</div>
</div>
</template>
<style>
	.pic:hover > .overlay {
			position: absolute;
			top: 0;
			width:100%;
			height:100%;
			left: 0;
			background-color:#000;
			opacity:0.5;
			z-index: 100;
			display: block;
	}
</style>

