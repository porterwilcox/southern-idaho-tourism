<template>
  <div class="home container-fluid">
    <div id="home-carousel" data-interval="4800" class="carousel slide row" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#home-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#home-carousel" data-slide-to="1"></li>
        <li data-target="#home-carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner position-relative">
        <div
          class="caro-text-container h-100 position-absolute w-100 d-flex justify-content-center align-items-center"
        >
          <h2 class="caro-text">Your Southern Idaho</h2>
        </div>
        <div class="carousel-item active">
          <img
            src="https://usercontent1.hubstatic.com/14396242_f520.jpg"
            class="d-block w-100"
            height="400px"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/loftus-hot-springs-940x627.jpg"
            class="d-block w-100"
            height="400px"
          />
        </div>
        <div class="carousel-item">
          <img
            src="http://exumguides.com/wp-content/uploads/2014/01/IMG_1621.jpg"
            class="d-block w-100"
            height="400px"
          />
        </div>
      </div>
      <a class="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="row justify-content-center bg-baige">
      <div class="col-11">
        <div class="row justify-content-between" :class="{'flex-column': $mq < 3}">
          <div class="col-12 col-lg-4">
            <div class="card">
              <div class="card-header-container">
                <img
                  src="https://croplogic.com/cl/wp-content/uploads/2019/03/CL_Product-Feature_495x400_staff_01.jpg"
                  class="card-img-top"
                />
                <h4 class="centered">Recreate Outdoors</h4>
              </div>
              <div class="card-body text-center">
                <p class="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore hic sed maiores quo!
                  <a href="#" class="text-link-green">Explore areas.</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card card2">
              <div class="card-header-container">
                <img
                  src="https://croplogic.com/cl/wp-content/uploads/2019/04/CL_Product-Feature_495x400_realTime_03.jpg"
                  class="card-img-top"
                />
                <h4 class="centered">Fill Your Belly</h4>
              </div>
              <div class="card-body text-center">
                <p class="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et beatae rerum?
                  <a href="#" class="text-link-green">Find out more.</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card card3">
              <div class="card-header-container">
                <img
                  src="https://croplogic.com/cl/wp-content/uploads/2019/01/CL_Product-Feature_495x400_Sam-Kniveton.jpg"
                  class="card-img-top"
                />
                <h4 class="centered">Your Community</h4>
              </div>
              <div class="card-body text-center">
                <p class="text-black">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit?
                  <a href="#" class="text-link-green">View our team member stories here.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NOTE commented out to limit api hits when developing other features -->
    <div class="row justify-content-center py-3">
      <map-box :trackUser="triggerGeolocate" class="w-75"></map-box>
    </div>
    <div v-if="!scanQR" class="position-relative fade-in">
      <p @click="triggerGeolocate = true" class="hide-after-geolocate m-0 text-right action"><i>enable geolocation</i></p>
      <img @click="triggerGeolocate = true" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGiRy0kSH769Iw-XyVSH4jluiG3WTsju09u8Yh6nQZ1-Xs2XzQ" class="hide-after-geolocate arrow action">
      <p class="hide-after-geolocate my-2 text-secondary border-left border-top text-right w-50">or</p>
      <div @click="scanQR = true" class="text-center my-3 action border-left border-bottom">
        <img src="https://raw.githubusercontent.com/gruhn/vue-qrcode-reader/master/.github/logo.png" height="30px" alt="qr-code" />
        <div class="text-link-green m-0" v-html="qrMessage"></div>
      </div>
    </div>
    <div class="py-3" v-else>
      <QRCodeScanner @exitCamera="exitCamera" />
    </div>
    <footer class="row py-3 bg-link-green align-items-center justify-content-end">
      <p class="text-dark m-0">porter wilcox 2019</p>
    </footer>
  </div>
</template>

<script>
import MapBox from "@/components/Map.vue";
import QRCodeScanner from "@/components/QRCodeScanner.vue";

export default {
  name: "home",
  data() {
    return {
      scanQR: false,
      triggerGeolocate: false,
      qrMessage: '<p class="h-underline">scan to locate current position on map</p>'
    };
  },
  methods: {
    exitCamera() {
      this.scanQR = false;
      this.qrMessage = ["AWESOME", "SWEET", "GOT IT"][Math.floor(Math.random() * 3)] + "!<p style='font-size: xx-small' class='h-underline'>scan another</p>"
      setTimeout(() => {
        let helpers = document.querySelectorAll('.hide-after-geolocate')
        if (helpers.length === 3) helpers[2].classList.replace('hide-after-geolocate', 'd-none')
      }, 100)
    }
  },
  components: { MapBox, QRCodeScanner }
};
</script>

<style>
.caro-text-container {
  z-index: 1;
  animation: caption-left 1s 1 cubic-bezier(0.985, 0.005, 0.265, 1);
  left: -100%;
  animation-fill-mode: forwards;
}

@keyframes caption-left {
  100% {
    left: 0;
  }
}

.caro-text {
  font-size: 3vw;
  color: white;
  border: 3px solid white;
  font-family: "oswald", "HelveticaNeue", "Helvetica Neue", "Helvetica-Neue",
    Helvetica, Arial, sans-serif;
}

.card-img-top {
  transition: all 0.5s;
  border-radius: 3%;
  filter: brightness(75%);
}

.card-header-container:hover .card-img-top {
  filter: brightness(100%);
}

.card {
  opacity: 0;
  position: relative;
  top: -50px;
  border: 10px solid white;
  border-radius: 5%;
  min-height: fit-content;
  height: 100%;
  box-shadow: 0 0 1px lightgrey;
  animation: fade-appear 0.75s cubic-bezier(0.985, 0.005, 0.265, 1) 1 normal
    forwards;
  z-index: 16;
}

.card2 {
  animation-delay: 0.05s;
}

.card3 {
  animation-delay: 0.1s;
}

@keyframes fade-appear {
  100% {
    opacity: 1;
  }
}

.card-header-container {
  position: relative;
  text-align: center;
  color: white;
  cursor: pointer;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "oswald", "HelveticaNeue", "Helvetica Neue", "Helvetica-Neue",
    Helvetica, Arial, sans-serif;
  text-transform: uppercase;
}

.text-center.my-3.action:hover .h-underline {
  text-decoration: underline;
}
.arrow {
  height: 2rem;
  transform: rotateZ(140deg);
  position: absolute;
  top: -5vh;
  right: 5vw;
}
.fade-in-out {
  animation-name: blink;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: 3;
  animation-delay: 1s;
}
@keyframes blink {
  80% {
    opacity: .8;
  }
  100% {
    opacity: 0;
  }
}

.fade-in {
  opacity: 0;
  animation-name: fade-appear;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}


@media (max-width: 768px) {
  .card {
    top: 0;
    margin: 1rem 0;
  }
  .arrow {
  transform: rotateZ(160deg);
    right: -2vw;
  }
}
</style>