<template>
    <div>
      <div class="jumbotron text-center bg-info text-white">
          <div class="display-3">
            <img alt="Vue logo" src="@/assets/logo.png" id="logo">
            Exercise App
          </div>
      </div>
  <form class="text-right">
    <div class="form-group row justify-content-center">
      <div class="col-md-6 ">
        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
      </div>
    </div>
    <div class="form-group row justify-content-center">
      <div class="col-md-6">
        <input type="password" class="form-control" id="password" name="password" placeholder="Password">
      </div>
    </div>
    <div class="form-group row justify-content-center">
      <div class="col-xs-1 px-2">
        <button type="button" class="btn btn-primary" id="submit" @click.prevent="login()">
          Sign in
        </button>
      </div>
      <div class="col-xs-1 px-2">
        <button type="button" class="btn btn-success" onclick="window.location.href='/newUser'">New User? Register Now</button>
      </div>
    </div>
</form>  
    </div>
</template>
<script>
import * as api from '@/services/api_access';

export default {

  methods: {
    login(){
      api.Login(document.getElementById("email").value, document.getElementById("password").value)
        .then(x=> this.checkUser(x));
    },
    checkUser(x){
      console.log(x);
      if(x === -1) alert("The email address entered does not match our records");
      else if(x == -2) alert("The password entered does not match our records");
      else window.location.href='/profile/'+x;
    }  
  }
}
</script>

