<script setup lang="ts">
import { reactive } from "vue";

function startRecording() {
  console.log("Video recording started...");
  navigator.mediaDevices
    .getUserMedia({ audio: false, video: true })
    .then(onStream);
}

const state = reactive({
  stream: new MediaStream(),
  playing: false,
});

function stopRecording() {
  var canvas = <HTMLCanvasElement> document.getElementById('canvas');
  var photo = document.getElementById('photo');
  var video = <HTMLCanvasElement> document.getElementById('video');
  var context = canvas!.getContext('2d');
  var height = parseInt(video!.getAttribute('height') as string);
  var width = parseInt(video!.getAttribute('width') as string);
  context!.drawImage(video, 0, 0, width, height);
  var data = canvas!.toDataURL('image/png');
  photo!.setAttribute('src', data);
  state.stream.getTracks().forEach((track) => track.stop());
  state.playing = false;
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
  <canvas id="canvas" v-else>
    <div class="output">
      <img id="photo" alt="The screen capture will appear in this box.">
    </div>
  </canvas>
  To dos: Use flower image classifier - be able to take photo or upload photo of
  flower - receive confidence result
</template>
