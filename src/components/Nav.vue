<template>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">Exercise App</a>

  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/profile/">Home</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Workouts
        </a>
        <div class="dropdown-menu bg-dark border-0">
          <router-link class="nav-link dropdown-item bg-dark" exact-active-class="active" to="/workouts/upper">Upper Body</router-link>
          <router-link class="nav-link dropdown-item bg-dark" exact-active-class="active" to="/workouts/lower">Lower Body</router-link>
          <router-link class="nav-link dropdown-item bg-dark" exact-active-class="active" to="/workouts/core">Core</router-link>
          <router-link class="nav-link dropdown-item bg-dark" exact-active-class="active" to="/workouts/cardio">Cardio</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/">Sign Out</router-link>
      </li> 
    </ul>
  </div> 
</nav>
</template>

