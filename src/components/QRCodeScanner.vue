<template>
  <div class="qr-code-scanner">
    <div v-if="cameraDisplayLoading" class="text-link-green w-100 text-center">
      <i class="fas fa-spinner fa-5x fa-spin"></i>
      <p>loading camera...</p>
    </div>
    <qrcode-stream @init="onInit" @detect="onDetect" class="h-100">
      <div class="qr-overlay-container w-100 h-100 flex-column d-none">
        <div class="qr-overlay-inner-container h-50 d-flex align-items-center">
          <div class="qr-overlay-corner-border qr-b-1"></div>
          <div class="qr-overlay-corner-border qr-b-2"></div>
        </div>
        <div class="qr-overlay-inner-container h-50 d-flex align-items-center">
          <div class="qr-overlay-corner-border qr-b-3"></div>
          <div class="qr-overlay-corner-border qr-b-4"></div>
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
        document
          .querySelector(".qr-overlay-container")
          .classList.replace("d-none", "d-flex");
      } catch (error) {
        alert(error.message)
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
    async onDetect(promise) {
      try {
        let {
          imageData, // raw image data of image/frame
          content, // decoded String
          location // QR code coordinates
        } = await promise;
        console.log({ imageData, content, location });
        content = JSON.parse(content);
        if (
          content.length === 2 &&
          content.every((n, i) => {
            let min = i == 0 ? -180 : -90;
            return n >= min && n <= Math.abs(min);
          })
        ) {
          try {
            this.$store.dispatch("setCenter", content);
            this.$emit('exitCamera');
          } catch (error) {
            console.log(error)
          }
        }

        document
          .querySelector(".qr-overlay-container")
          .classList.replace("d-flex", "d-none");
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {}
};
</script>

<style>
.qr-overlay-inner-container {
  justify-content: space-evenly;
}
.qr-overlay-corner-border {
  border: 5px outset rgba(0, 0, 0, 0.5);
  width: 25%;
  height: 50%;
}
.qr-overlay-corner-border {
  border-radius: 5%;
}
.qr-b-1 {
  border-right: none;
  border-bottom: none;
}
.qr-b-2 {
  border-left: none;
  border-bottom: none;
}
.qr-b-3 {
  border-right: none;
  border-top: none;
}
.qr-b-4 {
  border-left: none;
  border-top: none;
}
</style>