<template>
<div>


<section class="w3l-about-breadcrumb text-center">
    <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div class="container py-2">
            <h2 class="title">My Projects</h2>
            <ul class="breadcrumbs-custom-path mt-2">
                <li><router-link to="/">Home</router-link></li>
                <li class="active"><span class="fa fa-arrow-right mx-2" aria-hidden="true"></span> Project </li>
            </ul>
        </div>
    </div>
</section>


<section class="w3l-services ">
    <div class="blog py-5" id="services">
        <div class="container py-lg-5">
            <h5 class="title-small text-center">Projects list</h5>
            <h3 class="title-big text-center mb-sm-5 mb-4">I have done lots of project for my client.</h3>
            <div class="row">
                
                    
                    <div class="col-md-4 col-sm-12 col-xs-12" v-for="project in data.portfolio.projects" v-bind:key="project">
                        <div class="item">
                            <div class="card">
								<a :href="project.url" target="_blank">
                                <div class="box-wrap">
                                    <div class="icon">
                                        <span class="fa fa-pencil-square-o"></span>
                                    </div>
                                    <h4 class="number">{{project.no}}</h4>
                                    <h4><a >{{project.title}}</a></h4>
                                    <p>{{project.description}}</p>
                                </div>
								</a>
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
        title: 'Project : '+this.data.main.name,
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
