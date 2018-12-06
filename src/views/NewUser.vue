<template>
<div>  
  <div class="jumbotron jumbotron-fluid text-center bg-info text-white">
    <div class="display-3">
      <img alt="Vue logo" src="@/assets/logo.png" id="logo">
      Welcome to Exercise App
    </div>
    <div>
      <h3 class="mt-3">
        Let us know a little about yourself
      </h3>
    </div>
  </div>
<div class="container mt-5">
<hr class="mx-5">
<form class="mt-5">
  <div class="form-row">
    <div class="form-group col-md-6 justify-content-start">
      <div class="text-danger">
        <label for="f_name" class="col-md-3 mx-2">First Name*</label>
        <input type="text" class="col-md-8 mx-2" id="f_name" name="f_name" placeholder="First Name (Required)">
      </div>
    </div>
    <div class="form-group col-md-6 justify-content">
      <div class="text-danger">
        <label for="l_name" class="col-md-3 mx-2">Last Name*</label>
        <input type="text" class="col-md-8 mx-2" id="l_name" name="l_name" placeholder="Last Name (Required)">
      </div>
    </div>
  </div>
    <div class="form-row">
    <div class="form-group col-md-6 justify-content-start">
      <div class="text-danger">
        <label for="email" class="col-md-3 mx-2">Email*</label>
        <input type="email" class="col-md-8 mx-2" id="email" placeholder="Email (Required)">
      </div>
    </div>
    <div class="form-group col-md-6 justify-content">
      <div class="text-danger">
        <label for="password" class="col-md-3 mx-2">Password*</label>
        <input type="password" class="col-md-8 mx-2" id="password" name="password" placeholder="Password (Required)">
      </div>
    </div>
  </div>
  <div class="row justify-content-center" id="gender">
      <label for="gender" class="inline text-danger mx-2">Gender*: </label>
      <div class="form-check-inline">
        <input class="form-check-input" type="radio" name="gender" id="male" value="male" checked>
        <label class="form-check-label" for="male">
          Male
        </label>
      </div>
      <div class="form-check-inline">
          <input class="form-check-input" type="radio" name="gender" id="female" value="female">
          <label class="form-check-label" for="female">
            Female
          </label>
      </div>
  </div>
  <hr class="mx-5">
  <div class="text-center text-danger mb-4">
    *Required Information
  </div>
  <div class="form-group row justify-content-center">
      <button type="button" class="btn btn-primary mx-2" @click.prevent="createUser()">
        Get Started
      </button>
      <button type="button" class="btn btn-danger mx-2" onclick="window.location.href='/'">Go Back</button>
  </div>
</form>
</div>
</div>
</template>
<script>
import * as api from '@/services/api_access';

export default {

  methods: {
    createUser(){
      const f_name = document.getElementById("f_name").value;
      const l_name = document.getElementById("l_name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      api.createUser(f_name, l_name, this.checkGender(), email, password)
        .then(x => this.checkUser(x))
    },
    checkUser(u){
      if(u === -1) alert("User account already exists");
      else window.location.href='/profile/?id='+u;
    },
    checkGender(){
      const male = document.getElementById("male");
      const female = document.getElementById("female");
      if(male.checked == true) return male.value;
      else return female.value;
    }
  }
}
</script>