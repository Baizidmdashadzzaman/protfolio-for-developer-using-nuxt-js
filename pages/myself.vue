<template>
<div>


<section class="w3l-about-breadcrumb text-center">
    <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div class="container py-2">
            <h2 class="title">About Me</h2>
            <ul class="breadcrumbs-custom-path mt-2">
                <li><router-link to="/">Home</router-link></li>
                <li class="active"><span class="fa fa-arrow-right mx-2" aria-hidden="true"></span> About Me </li>
            </ul>
        </div>
    </div>
</section>


<section class="w3l-aboutblock1" id="about">
    <div class="midd-w3 py-5">
        <div class="container py-lg-5 py-md-3">
            <div class="row">
                <div class="col-lg-4">
                    <div class="position-relative">
                        <img :src="data.main.fullimage" alt="" class="radius-image img-fluid">
                    </div>
                </div>
                <div class="col-lg-8 mt-lg-0 mt-5">
                    <h5 class="title-small mb-2">Hello, I am {{data.main.designation}}</h5>
                    <h3 class="title-big">Having {{data.main.yearofexperience}} Years of Experience</h3>
                    <p class="mt-4">{{data.main.bio}}</p>
                    <div class="my-info mt-4">
                        <div class="single-info"><span>Name:</span>
                            <p>{{data.main.name}}</p>
                        </div>
                        <div class="single-info"><span>Age:</span>
                            <p>{{data.main.age}}</p>
                        </div>
                        <div class="single-info"><span>From:</span>
                            <p>{{data.main.address.city}}, {{data.main.address.state}}</p>
                        </div>
                        <div class="single-info"><span>Email:</span>
                            <p><a :href="data.main.email">{{data.main.email}}</a></p>
                        </div>
                    </div>
                    <div class="my-social mt-lg-5 mt-4">
                        <a :href="data.main.resumedownload" target="_blank" class="btn btn-style btn-primary">Download CV</a>
                        <ul class="social m-0 p-0">
                            <li v-for="social in data.main.social" v-bind:key="social" >
                                <a :href="social.url"><span :class="social.className"></span></a>
                            </li>
                            
                          </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="w3l-services py-5 w3l-resume ">
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




<section class="w3l-content-6 py-5">
    <div class="content-6-mian py-lg-5 py-md-4">
        <div class="container">
            <div class="content-info-in row">
                <div class="content-gd col-lg-5">
                    <h3 class="title-big mb-4">{{data.resume.skillssectiontitle}}</h3>
                    <p>
                        {{data.resume.skillssectiondescription}}
                    </p>
                </div>
                <div class="content-gd col-lg-6 offset-lg-1">
                    <div class="progress-info" v-for="skill in data.resume.skills" v-bind:key="skill">
                        <h6 class="progress-tittle"><b>{{skill.name}} :</b> <font style="float:right">{{skill.level}}</font> </h6> 
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>


<div class="abouthy-img-grids">
    <div class="img-one">
        <img src="/resources/assets/images/g5.jpg" alt=" " class="img-fluid">
    </div>
    <div class="img-one content-mid">
        <center>
        <h3 class="title-big"> Call me right now </h3><br>
        <a  href="" class="btn btn-style btn-primary">{{data.main.phone}}</a>
         
        </center>
    </div>
    <div class="img-one">
        <img src="/resources/assets/images/g3.jpg" alt=" " class="img-fluid">
    </div>
</div>

<section class="w3l-services">
    <div class="w3l-achievements py-5" id="services">
        <div class="container py-lg-5">
            <h5 class="title-small text-center">Education</h5>
            <h3 class="title-big text-center mb-sm-5 mb-4">My Educations</h3>
            <div class="row">
                
                <div class="col-lg-6 item" v-for="education in data.resume.education" v-bind:key="education">
                    <div class="card">
                        <div class="box-wrap">
                            <div class="icon">
                                <span class="fa fa-graduation-cap"></span>
                            </div>
                            <h4><a href="">{{education.degree}}</a></h4>
                            <p>
                                School : {{education.school}}<br>
                                Graduated : {{education.graduated}}<br>
                                Description : {{education.description}}<br>
                            </p>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    </div>
</section>

<section class="w3l-services">
    <div class="w3l-achievements py-5" id="services">
        <div class="container py-lg-5">
            <h5 class="title-small text-center">Work</h5>
            <h3 class="title-big text-center mb-sm-5 mb-4">My Work Experience</h3>
            <div class="row">
                
                <div class="col-lg-6 item" v-for="work in data.resume.work" v-bind:key="work">
                    <div class="card">
                        <div class="box-wrap">
                            <div class="icon">
                                <span class="fa fa-briefcase"></span>
                            </div>
                            <h4><a href="">{{work.title}}</a></h4>
                            <p>
                                Company : {{work.company}}<br>
                                Year : {{work.years}}<br>
                                Description : {{work.description}}<br>
                            </p>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    </div>
</section>

<section class="w3l-services">
    <div class="w3l-achievements py-5" id="services">
        <div class="container py-lg-5">
            <h5 class="title-small text-center">My achievements</h5>
            <h3 class="title-big text-center mb-sm-5 mb-4">Personal Awards</h3>
            <div class="row">
                
                <div class="col-lg-6 item" v-for="awward in data.awwards.awwards" v-bind:key="awward">
                    <div class="card">
                        <div class="box-wrap">
                            <div class="icon">
                                <span class="fa fa-trophy"></span>
                            </div>
                            <h4><a href="">{{awward.title}}</a></h4>
                            <p>{{awward.description}}</p>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
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
        title: 'About : '+this.data.main.name,
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
