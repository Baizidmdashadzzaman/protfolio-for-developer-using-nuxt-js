<template>
<div>

<header id="site-header" class="fixed-top">
  <div class="container">
      <nav class="navbar navbar-expand-lg stroke">
          <nuxt-link to="/" class="navbar-brand">
              <span class="fa fa-laptop"></span> {{data.main.shortname}}
          </nuxt-link>
          
          <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
              data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span class="navbar-toggler-icon fa icon-close fa-times"></span>
              
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                     <nuxt-link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></nuxt-link>
                  </li>
                  <li class="nav-item @@about__active">
                      <nuxt-link to="/myself" class="nav-link" >About</nuxt-link>
                  </li>
                  <li class="nav-item @@projects__active">
                      <nuxt-link to="/projects" class="nav-link" >Project</nuxt-link>
                  </li>
                  <li class="nav-item @@contact__active">
                      <nuxt-link to="/contact" class="nav-link" >Contact</nuxt-link>
                  </li>
              </ul>
          </div>
          
          <div class="mobile-position">
              <nav class="navigation">
                  <div class="theme-switch-wrapper">
                      <label class="theme-switch" for="checkbox">
                          <input type="checkbox" id="checkbox">
                          <div class="mode-container">
                              <i class="gg-sun"></i>
                              <i class="gg-moon"></i>
                          </div>
                      </label>
                  </div>
              </nav>
          </div>
         
      </nav>
  </div>
</header>


<nuxt/>
 

<section class="w3l-footer py-sm-5 py-4">
  <div class="container">
    <div class="footer-content">
      <div class="row">
        <div class="col-lg-8 footer-left">
          <p class="m-0">{{data.main.shortname}} © Copyright 2021. Developed by <a href="https://baizidmdashadzzaman.com/" target="_blank">ASADZAMAN</a></p>
        </div>
        <div class="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
          <ul class="social m-0 p-0">
            <li v-for="socaildata in data.main.social" v-bind:key="socaildata">
              <a :href="socaildata.url"><span :class="socaildata.className"></span></a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>

  
  <button onclick="topFunction()" id="movetop" title="Go to top">
    <span class="fa fa-angle-up"></span>
  </button>

</section>


</div>
</template>
<script>
import data from '~/static/api/data.json'
export default {
    
    name:"index",
    data(){
        return {
            data:data,
			
        }
    }
}
</script>