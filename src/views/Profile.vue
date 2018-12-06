
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
						<img class="d-block w-100" src="@/assets/upper.jpg" alt="Upper1">
              					<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=0"> Upper Body Workout </a></div></div>						
						
					</div>
    					<div class="carousel-item pic">
      						<img class="d-block w-100" src="@/assets/upper1.jpg" alt="Upper2">	
						<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=0"> Upper Body Workout </a></div></div>
					</div>
          				<div class="carousel-item pic">
      						<img class="d-block w-100" src="@/assets/upper2.jpg" alt="Upper3">
						<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=0"> Upper Body Workout </a></div></div>
  					</div>
				</div>
			</div>
			<div id="core carousel" class="carousel slide py-3" data-ride="carousel">
  			<div class="carousel-inner">
    			<div class="carousel-item active pic">
      			<img class="d-block w-100" src="@/assets/core.jpg" alt="Core1"/>						
						<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=1"> Core Workout </a></div></div>
					</div>
    			<div class="carousel-item pic">
      			<img class="d-block w-100" src="@/assets/core1.jpg" alt="Core2">
       			<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=1"> Core Workout </a></div></div>
					</div>
    			<div class="carousel-item pic">
      			<img class="d-block w-100" src="@/assets/core2.jpg" alt="Core3">						
						<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=1"> Core Workout </a></div></div>
					</div>
  			</div>
			</div>
			<div id="lower carousel" class="carousel slide py-3" data-ride="carousel">
  			<div class="carousel-inner">
    			<div class="carousel-item active pic">
      			<img class="d-block w-100 " src="@/assets/lower.jpg" alt="Lower1">						
              <div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=2"> Lower Body Workout </a></div></div>
						</div>
    				<div class="carousel-item pic">
      				<img class="d-block w-100" src="@/assets/lower1.jpg" alt="Lower2">
       				<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=2"> Lower Body Workout </a></div></div>
						</div>
    				<div class="carousel-item pic">
      				<img class="d-block w-100" src="@/assets/lower2.jpg" alt="Lower3"/>						
							<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=2"> Lower Body Workout </a></div></div>
						</div>
  				</div>
				</div>
				<div id="cardio carousel" class="carousel slide py-4" data-ride="carousel">
  					<div class="carousel-inner">
    						<div class="carousel-item active pic">
      							<img class="d-block w-100" src="@/assets/cardio.jpg" alt="Cardio1">						
							      <div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=3"> Cardio Workout </a></div></div>
						    </div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="@/assets/cardio1.jpg" alt="Cardio2">
       							<div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=3"> Cardio Workout </a></div></div>
						    </div>
    						<div class="carousel-item pic">
      							<img class="d-block w-100" src="@/assets/cardio2.jpg" alt="Cardio3">						
							      <div class="overlay"><div class="carousel-caption button"><a class="btn btn-info" href="/workouts/?type=3"> Cardio Workout </a></div></div>
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
      	<div class="w-100 bg-light posts border-bottom border-dark"></div>
        <div class="w-100 bg-light justify-content-center">
          <button class="btn btn-info mt-3 w-75 border-dark"  data-toggle="modal" data-target="#posts">Add Post</button>
        </div>
      </div>
    </div>
	</div>
</div>
<div class="col-lg-3 bg-lightGrey order-3 p-4 text-center ">
	<div class="m-auto">
    <h3 class="display-4 text-dark">Friends</h3>
    <hr class="bg-dark">
		<div class="card my-3 bg-lightGrey border-0">
 			<div class="container">
				<div class="row my-3">
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">					
						</div>				
					</div>
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">
						</div>				
					</div>
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">	
						</div>				
					</div>
				</div>
				<div class="row my-3">
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">					
						</div>				
					</div>
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">
						</div>				
					</div>
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">		
						</div>				
					</div>
				</div>
				<div class="row justify-content-center">
					<button class="btn btn-info mt-3 w-75 border-dark" data-toggle="modal" data-target="#myFriends">
						See All Friends
					</button>
				</div>
			</div>
		</div>
		<h3 class="display-4 text-dark">Pictures</h3>
    <hr class="bg-dark">
		<div class="card my-3 bg-lightGrey border-0">
 			<div class="container">
				<div class="row my-3">
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">					
						</div>				
					</div>
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">
						</div>				
					</div>
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">
						</div>				
					</div>
				</div>
				<div class="row my-3">
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">					
						</div>				
					</div>
					<div class="col-4">
						<div class="card bg-dark pic">
							<img class="d-block w-100" src="" alt="First slide">
						</div>				
						</div>
							<div class="col-4">
								<div class="card bg-dark pic">
									<img class="d-block w-100" src="" alt="First slide">
								</div>				
							</div>
						</div>
						<div class="row justify-content-center">
							<button class="btn btn-info mt-3 w-75 border-dark" data-toggle="modal" data-target="#myPictures">
								See All Pictures
							</button>
						</div>
					</div>
				</div>
			</div>
    </div>
	</div>
<!-- Modal -->
<div id="myFriends" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h4 class="modal-title">Friends</h4> 
       <button type="button" class="close text-white" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body scroll-y">
        <p>Friends Modal</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

<!-- Modal -->
<div id="myPictures" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
	<h4 class="modal-title">Pictures</h4>
        <button type="button" class="close text-white" data-dismiss="modal">&times;</button>      
      </div>
      <div class="modal-body scroll-y">
        <p>Picture Modal</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
	<div id="posts" class="modal fade" role="dialog">
  	<div class="modal-dialog">
<!-- Modal content-->
    	<div class="modal-content">
      	<div class="modal-header bg-primary text-white">
					<h4 class="modal-title">Post A Comment</h4>
        	<button type="button" class="close text-white" data-dismiss="modal">&times;</button>      
      	</div>
      	<div class="modal-body scroll-y">
  				<div class="input-group h-100">
  					<textarea class="form-control" aria-label="With textarea"></textarea>
					</div>      
      	</div>
      	<div class="modal-footer">
					<button type="button" class="btn btn-primary" @click.prevent = "submitPost">Submit</button>
        	<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      	</div>
    	</div>
  	</div>
	</div>
</div>

</template>
	<style>
	.pic:hover img {
		filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
	}
	
	.posts {
		height: 400px;
		overflow-y: scroll;
	}
	.postsContainer{
		width: 90%;
  	}	
	.button {
		opacity: 0;
		transition: opacity .35s ease;
		display: inline-block;
	}
	.pic:hover > .overlay > .button {
		opacity: 1;
	}
	.bg-lightGrey{
		background-color: LightGrey;
	}
	.scroll-y{
		overflow-y: scroll;
		height: 400px;
	}
	.h-400{
		height: 400px;
	}

	</style>
<script>
import * as api from '@/services/api_access';

export default {

  created(){
		
		console.log($route.params.id);
		
  },
  methods: {

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
		},
		submitPost(){  
			alert("Submitted");
			$('#posts').modal('hide');
		}
  }
}
</script>