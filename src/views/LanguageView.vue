<script setup lang="ts">
import { reactive } from "vue";
import { useSettingsStore } from "@/stores/settings";

import {
  TranslatorTextClient,
} from "@azure/cognitiveservices-translatortext";

import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";

const settings = useSettingsStore();
const endpoint = "https://" + settings.azureregion + ".api.cognitive.microsoft.com/";
const taclient = new TextAnalyticsClient(endpoint,
    new AzureKeyCredential(settings.apikey));
const ttclient = new TranslatorTextClient(new AzureKeyCredential(settings.apikey), 
    endpoint);
const documents = [];
const translation = "";
const sentiment = "";

function onGo(){
  documents.push(sentence);
  documents.push("text: " + sentence);
  sentiment = await taclient.analyzeSentiment(documents);
  translation = await ttclient.translator.detect(documents);

}

// function startRecording() {
//   console.log("Recording started...");
//   navigator.mediaDevices
//     .getUserMedia({ audio: true, video: false })
//     .then(onStream);
// }

// const state = reactive({ text: "" });
// var recognizer: SpeechRecognizer;
// var selectedLanguage = "";

// function onStream(stream: MediaStream) {
//   const speechConfig = SpeechConfig.fromSubscription(
//     settings.apikey,
//     settings.azureregion
//   );
//   speechConfig.speechRecognitionLanguage = selectedLanguage;
//   const audioConfig = AudioConfig.fromStreamInput(stream);
//   recognizer = new SpeechRecognizer(speechConfig, audioConfig);
//   recognizer.recognizing = onRegonitionResult;
//   recognizer.recognized = onRegonitionResult;
//   recognizer.startContinuousRecognitionAsync();
// }

// function onRegonitionResult(
//   sender: any,
//   event: SpeechRecognitionEventArgs
// ): void {
//   state.text = event.result.text;
// }
// function onResult(): void {
//   recognizer.stopContinuousRecognitionAsync();
// }
// function onChange(e: any) {
//   selectedLanguage = e.target.value;
//   console.log(e.target.value);
// }
</script>

<template>

  <div class="form-control">
    <div class="input-group">
      <select class="select select-bordered">
        <option disabled selected>Pick a language</option>
        <option>de-DE</option>
        <option>en-US</option>
        <option>es-ES</option>
        <option>fr-FR</option>
        <option>hi-IN</option>
      </select>
      <label class="input-group">
        <input type="text" placeholder="0.01" class="input input-bordered" v-model="sentence"/>
        <span>language</span>
      </label>
    </div>
  </div>
  <div class="form-control">
    <div class="input-group">
      <input type="text" placeholder="I am really interested in AI and happy to try it" class="input input-bordered" />
      <button class="btn" @click="onGo">Go</button>
    </div>
  </div>

  <div class="form-control">
    <div class="input-group">
      <select class="select select-bordered">
        <option disabled selected>Pick a language</option>
        <option>de-DE</option>
        <option>en-US</option>
        <option>es-ES</option>
        <option>fr-FR</option>
        <option>hi-IN</option>
      </select>
      <label class="input-group">
        <input type="text" placeholder="0.01" class="input input-bordered" />
        <span>language</span>
      </label>
    </div>
  </div>
  <div class="form-control">
      <input type="text" placeholder="I am really interested in AI and happy to try it" class="input input-bordered" />
  </div>
  To do: Input Text - Translate text into several languages (select language
  from a dropdown) - sentiment analyse
</template>
