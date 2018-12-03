<template>
    <!--nav class="navbar navbar-inverse navbar-expand-lg navbar-dark bg-info">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/newUser">New User</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/profile">Profile</router-link>
            </li>
        </ul>
    </nav-->
<nav class="navbar navbar-inverse navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" exact-active-class="active" to="/newUser">New User</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" exact-active-class="active" to="/profile">Profile</router-link>
        </li>
    </ul>
    <ul class="nav navbar-nav navbar-right navbar-dark">
      <li><a href="#"><span class="oi oi-person"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
</template>
