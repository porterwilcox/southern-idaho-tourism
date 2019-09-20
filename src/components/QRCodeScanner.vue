<template>
  <div class="qr-code-scanner">
    <div v-if="cameraDisplayLoading" class="text-link-green w-100 text-center">
      <i class="fas fa-spinner fa-5x fa-spin"></i>
      <p>loading camera...</p>
    </div>
    <qrcode-stream @init="onInit" @detect="onDetect" class="h-100">
        <div class="qr-overlay-container w-100 h-100 d-flex flex-column">
            <div class="qr-overlay-inner-container h-50 d-flex justify-content-around align-items-center">
                <div class="qr-overlay-corner-border s-"></div>
                <div class="qr-overlay-corner-border s-"></div>
            </div>
            <div class="qr-overlay-inner-container h-50 d-flex justify-content-around align-items-center">
                <div class="qr-overlay-corner-border s-"></div>
                <div class="qr-overlay-corner-border s-"></div>
            </div>
        </div>
    </qrcode-stream>
  </div>
</template>

<script>
export default {
  name: "qr-code-scanner",
  props: [],
  data() {
    return {
      cameraDisplayLoading: true
    };
  },
  computed: {},
  methods: {
    async onInit(promise) {
      try {
        await promise;
        this.cameraDisplayLoading = false;
      } catch (error) {
        //TODO complete graceful error handling on init
        if (error.name === "NotAllowedError") {
          // user denied camera access permisson
        } else if (error.name === "NotFoundError") {
          // no suitable camera device installed
        } else if (error.name === "NotSupportedError") {
          // page is not served over HTTPS (or localhost)
        } else if (error.name === "NotReadableError") {
          // maybe camera is already in use
        } else if (error.name === "OverconstrainedError") {
          // did you requested the front camera although there is none?
        } else if (error.name === "StreamApiNotSupportedError") {
          // browser seems to be lacking features
        }
      } finally {
        // hide loading indicator
      }
    },
    async onDetect (promise) {
    try {
      const {
        imageData,    // raw image data of image/frame
        content,      // decoded String
        location      // QR code coordinates
      } = await promise
        console.log({ imageData, content, location })
      // ...
    } catch (error) {
      // ...
    }
  }
  },
  components: {}
};
</script>

<style>
.qr-overlay-container {
    border: 1px solid red;
}
.qr-overlay-inner-container {
    border: 1px solid blue;    
}
.qr-overlay-corner-border {
    border: 1px solid green;    
}
.s- {
    width: 30%;
    height: 30%;
}
</style>