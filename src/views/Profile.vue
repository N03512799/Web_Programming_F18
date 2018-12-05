
<template>
<div class= "container-fluid">

	<div class = "row d-fluid border-top border-light">
		<div class="col-lg-3 bg-dark order-2 order-lg-1 p-4 text-center ">
			<div class="my-4">
      <h3 class="display-4 text-white">Workouts</h3>
			<hr class="bg-light">
			<div id="upper carousel" class="carousel slide py-3" data-ride="carousel">
  			<div class="carousel-inner">
    			<div class="carousel-item active pic">
				    <img class="d-block w-100" src="@/assets/upper.jpg" alt="First slide">
              <div class="overlay"></div>						
					</div>
    			<div class="carousel-item pic">
      			<img class="d-block w-100" src="@/assets/upper1.jpg" alt="Second slide">	
						<div class="overlay"></div>
					</div>
          <div class="carousel-item pic">
      			<img class="d-block w-100" src="@/assets/upper2.jpg" alt="Third slide">
						<div class="overlay"></div>
  				</div>
				</div>
			</div>
			<div id="core carousel" class="carousel slide py-3" data-ride="carousel">
  			<div class="carousel-inner">
    			<div class="carousel-item active pic">
      			<img class="d-block w-100" src="@/assets/core.jpg" alt="First slide"/>						
						<div class="overlay"></div>
					</div>
    			<div class="carousel-item pic">
      			<img class="d-block w-100" src="@/assets/core1.jpg" alt="Second slide">
       			<div class="overlay"></div>
					</div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="@/assets/core2.jpg" alt="Third slide">						
							      <div class="overlay"></div>
						</div>
  					</div>
				</div>
				<div id="lower carousel" class="carousel slide py-3" data-ride="carousel">
  					<div class="carousel-inner">
    						<div class="carousel-item active pic">
      							<img class="d-block w-100 " src="@/assets/lower.jpg" alt="First slide">						
                    <div class="overlay"></div>
						    </div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="@/assets/lower1.jpg" alt="Second slide">
       							<div class="overlay"></div>
						    </div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="@/assets/lower2.jpg" alt="Third slide"/>						
							      <div class="overlay"></div>
						</div>
  					</div>
				</div>
				<div id="cardio carousel" class="carousel slide py-4" data-ride="carousel">
  					<div class="carousel-inner">
    						<div class="carousel-item active pic">
      							<img class="d-block w-100" src="@/assets/cardio.jpg" alt="First slide">						
							      <div class="overlay"></div>
						    </div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="@/assets/cardio1.jpg" alt="Second slide">
       							<div class="overlay"></div>
						    </div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="@/assets/cardio2.jpg" alt="Third slide">						
							      <div class="overlay"></div>
						    </div>
  					</div>
				</div>
			</div>
			<hr class="bg-light">
      </div>
			<div class="col-lg-6 text-center bg-light order-1 order-lg-2  ">
        <h1 class="display-2">Profile</h1>
				<div class="container-fluid">
					<div class="jumbotron jumbotron-fluid my-4">
                <div class="container">
                  <h1 class="display-4">Fluid jumbotron</h1>
                  <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
					</div>
				</div>
				<div class="row justify-content-center">
          <div class=" card bg-light postsContainer my-4 border-dark border-top-0">
            <div class="card-header bg-dark text-white w-100">  
              <h3>Posts</h3>
            </div>
            <div class="card-body bg-light">
              <div class="w-100 bg-light posts border-bottom border-dark">

              </div>
              <div class="w-100 bg-light justify-content-center">
                <button class="btn btn-primary mt-3 w-75" @click.prevent="checkId">Add Post</button>
              </div>
            </div>
          </div>
				</div>
			</div>
			<div class="col-lg-3 bg-info order-3 p-4 text-center ">
				<div class="my-4">
        <h3 class="display-4 text-white">Friends</h3>
        <hr class="bg-light">
				<div class="card my-4 ">
            <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
				</div>
				<h3 class="display-4 text-white">Pictures</h3>
        <hr class="bg-light">
				<div class="card my-4">
            <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
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
		  background-color:#FFF;
		  opacity:0.3;
		  z-index: 100;
		  display: block;
	}

  .posts {
    height: 400px;
    overflow-y: scroll;
  } 
  .postsContainer{
    width: 90%;
  }
</style>
<script>
import * as api from '@/services/api_access';

export default {


  created(){
      api.getUser(this.getUrlParameter('id'))
        .then(x=> console.log(x))  
    
    
  },
  methods: {
    checkId() {

      
//      console.log(api.getUser(this.getUrlParameter('id')))
    
    },
    getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
    }

  }
}
</script>