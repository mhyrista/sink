<script setup lang="ts">
import { reactive } from "vue";

var canvasv = <HTMLCanvasElement> document.getElementById('canvas');
var photo = <HTMLCanvasElement> document.getElementById('photo');
var videov = <HTMLVideoElement> document.getElementById('video');

const state = reactive({
  stream: new MediaStream(),
  playing: false,
});

function startRecording() {
  console.log("Video recording started...");
  
  navigator.mediaDevices
    .getUserMedia({ audio: false, video: true })
    .then(onStream);
}

function stopRecording() {
  state.stream.getTracks().forEach((track) => track.stop());
  state.playing = false;
  takePicture();
}

function takePicture() {
  let context = canvasv.getContext('2d');
  // returns drawing context on the canvas - 2d enables drawImage
  // var height = parseInt(video!.getAttribute('height') as string);
  // var width = parseInt(video!.getAttribute('width') as string);
  context!.drawImage(videov, 0, 0, videov.videoWidth, videov.videoHeight);
  // draw an image onto the canvas
  var data = canvasv.toDataURL('image/png');
  // gives an image as data URI back
  photo.setAttribute('src', data);
}

function onStream(stream: MediaStream) {
  state.stream = stream;
  state.playing = true;
}
</script>

<template>
  <button class="btn gap-2" @click="stopRecording" v-if="state.playing">
    <font-awesome-icon icon="camera" />
    Take Picture
  </button>
  <button class="btn gap-2" @click="startRecording" v-else>
    <font-awesome-icon icon="camera" />
    Open Camera
  </button>
  <div class="camera" v-if="state.playing">
    <video id="video" autoplay :srcObject="state.stream" type="video/mp4">Video stream not yet available.</video>
  </div>
  <!-- <canvas id="canvas" v-else> -->
  <canvas id="canvas">
    <div class="output">
      <img id="photo" alt="The screen capture will appear in this box.">
    </div>
  </canvas>
  To dos: Use flower image classifier - be able to take photo or upload photo of
  flower - receive confidence result
</template>
