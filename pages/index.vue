<template>
<div>


<section id="home" class="w3l-banner py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-sm-12 mt-lg-0 mt-4">
                <span class="title-small">Hello</span>
                <h1 class="mb-2 title"> <span>I'm</span> {{data.main.name}} </h1>
                <p>{{data.main.occupation}}
                </p>
                <div class="mt-sm-5 mt-4">
                    <nuxt-link to="/contact" class="btn btn-primary btn-style mr-2" > Hire Me </nuxt-link>
                    <nuxt-link to="/contact" class="btn btn-outline-primary btn-style mr-2" > Portfolio </nuxt-link>
                </div>
            </div>
            <div class="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
                <div class="img-effect text-lg-center">
                    <img :src="data.main.image" alt="myphoto" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</section>


<section class="w3l-index3" id="about">
    <div class="midd-w3 py-5">
        <div class="container py-lg-5 py-md-3">
            <div class="row">
                <div class="col-lg-4">
                    <div class="position-relative">
                        <img :src="data.main.fullimage" alt="" class="radius-image img-fluid">
                    </div>
                </div>
                <div class="col-lg-8 mt-lg-0 mt-5">
                    <h5 class="title-small mb-2">Who am i?</h5>
                    <h3 class="title-big">I'm <b>{{data.main.name}}</b>, a {{data.main.occupation}}</h3>
                    <p class="mt-4">{{data.main.bio}}</p>
                    <a :href="data.main.resumedownload" target="_blank" class="btn btn-style btn-primary mt-lg-5 mt-4">Download CV</a>
                </div>
            </div>
        </div>
    </div>
</section>


<div class="py-5 w3l-resume">
    <div class="container py-lg-5 py-3">
        <h5 class="title-small mb-2">{{data.main.quotes1.sectiontitle}}</h5>
        <h3 class="title-big mb-4">{{data.main.quotes1.title}}</h3>
        <p>
            {{data.main.quotes1.description}}
        </p>
        <div class="mt-5">
            <a :href="data.main.resumedownload" target="_blank"  class="btn btn-style btn-primary">Download resume</a>
        </div>
    </div>
</div>


<section class="w3l-services">
    <div class="blog py-5" id="services">
        <div class="container py-lg-5">
            <h5 class="title-small text-center">Services</h5>
            <h3 class="title-big text-center mb-sm-5 mb-4">What I do for you</h3>
            <div class="row">
                
                    
                    <div class="col-md-4 col-sm-12 col-xs-12" v-for="service in data.services.services" v-bind:key="service">
                        <div class="item">
                            <div class="card">
                                <div class="box-wrap">
                                    <div class="icon">
                                        <span class="fa fa-pencil-square-o"></span>
                                    </div>
                                    <h4 class="number">{{service.no}}</h4>
                                    <h4><a >{{service.title}}</a></h4>
                                    <p>{{service.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

            </div>
            <div class="mt-5 text-more">
                <p class="mt-4 pt-3 sample text-center">
                    
                </p>
            </div>
        </div>
    </div>
</section>


<section class="w3l-stats py-lg-5 py-4" id="stats">
    <div class="gallery-inner container py-md-5 py-4">
        <div class="row stats-con">
            <div class="col-sm-3 col-6 stats_info counter_grid">
                <span class="fa fa-laptop"></span>
                <p >{{data.main.workabout.completedproject}}</p>
                <h4>Completed projects</h4>
            </div>
            <div class="col-sm-3 col-6 stats_info counter_grid1">
                <span class="fa fa-hourglass-end"></span>
                <p >{{data.main.workabout.inprogressproject}}</p>
                <h4>In processes</h4>
            </div>
            <div class="col-sm-3 col-6 stats_info counter_grid mt-sm-0 mt-5">
                <span class="fa fa-gift"></span>
                <p >{{data.main.workabout.awardrecived}}</p>
                <h4>Awards Received</h4>
            </div>
            <div class="col-sm-3 col-6 stats_info counter_grid2 mt-sm-0 mt-5">
                <span class="fa fa-smile-o"></span>
                <p >{{data.main.workabout.happyclinet}}</p>
                <h4>Happy Clients</h4>
            </div>
        </div>
    </div>
</section>


<section class="w3l-clients" id="clients">
   
    <div class="cusrtomer-layout py-5">
        <div class="container py-lg-5 py-md-4">
            <div class="heading text-center mx-auto">
                <h6 class="title-small text-center">Testimonials</h6>
                <h3 class="title-big mb-md-5 mb-4">What my clients think about Me </h3>
            </div>
           
            <div class="testimonial-width">
                <div class="row">
                    
                    <div class="col-md-6 col-sm-12 col-xs-12" v-for="testimonial in data.testimonials.testimonials" v-bind:key="testimonial">
                         <div class="item">
                          <div class="testimonial-content">
                            <div class="testimonial">
                                <blockquote>
                                    <q>{{testimonial.text}}</q>
                                </blockquote>
                                <div class="testi-des">
                                    <div class="peopl align-self">
                                        <h3>{{testimonial.clientname}}</h3>
                                        <p class="indentity">{{testimonial.clientaddress}}</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                      </div>
                    </div>
                 
            </div>
                

            </div>
        </div>
       
       
    </div>
    
    
</section>


<section class="w3l-index5" id="about">
    <div class="new-block py-5">
        <div class="container py-lg-5">
            <div class="middle-section text-center">
                <h5 class="title-small mb-2">{{data.main.quotes2.sectiontitle}}</h5>
                <div class="section-width">
                    <h3 class="title-big">
                        {{data.main.quotes2.title}}
                    </h3>
                    <p class="mt-3">
                        {{data.main.quotes2.description}}
                    </p>
                </div>
                
                
            </div>
        </div>
    </div>
</section>


 <section class="w3l-grid-quote text-center py-5">
   <div class="container py-3">
     <h6 class="title-small">Get in touch</h6>
     <h3 class="title-big mb-md-5 mb-4">Let's start a Project! Hire Me.</h3>
     <router-link to="/contact" class="btn btn-style btn-primary mr-2">Hire Me </router-link>
     <router-link to="/contact" class="btn btn-style btn-outline-primary">Get in touch</router-link>
   </div>
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
    },
    head() {
      return {
        title: 'Home : '+this.data.main.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
}
</script>