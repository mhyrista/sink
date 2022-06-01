<script setup lang="ts">
import { reactive } from "vue";
import { useSettingsStore } from "@/stores/settings";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

// import {
//   TranslatorTextClient,
// } from "@azure/cognitiveservices-translatortext";

// import {
//   TextAnalyticsClient,
//   AzureKeyCredential,
// } from "@azure/ai-text-analytics";

// const { v4: uuidv4 } = require('uuid');
// const axios = require('axios').default;
const settings = useSettingsStore();
// const endpoint = "https://" + settings.azureregion + ".api.cognitive.microsoft.com/";
var language2 = "";
var language1 = "";
var inputsentence = "";

function send(){
  // translate = "something ka";
  let inputsentence = (document.getElementById("inputtext")! as HTMLInputElement).value;
  // documents.push(sentence);
  // documents.push("text: " + sentence);
  translateText();

}

function translateText(){

  // (document.getElementById("translation")! as HTMLInputElement).value = inputsentence;

  axios({
    baseURL: 'https://api.cognitive.microsofttranslator.com',
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': settings.apikey,
        'Ocp-Apim-Subscription-Region': settings.azureregion,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        // 'from': [language1],
        'to': [language2]
    },
    data: [{
        'text': "ich bin nicht unbedingt glücklich"
    }],
    responseType: 'json'
  }).then(function(response){
    (document.getElementById("translation")! as HTMLInputElement).value = (JSON.stringify(response.data, null, 4));
  })
};

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
      <select class="select select-bordered" v-model="language1">
        <option disabled selected>Pick a language</option>
        <option selected>de</option>
        <option>en</option>
        <option>es</option>
        <option>fr</option>
        <option>hi</option>
      </select>
    </div>
    <div class="input-group">
      <label class="input-group">
        <input type="text" placeholder="I am really interested in AI and happy to try it" class="input input-bordered" id="inputtext"/>
        <button class="btn" @click="send">translate</button>
      </label>
    </div>
  </div>
  <div class="form-control">
    <div class="input-group">
      <select class="select select-bordered" v-model="language2">
        <option disabled selected>Pick a language</option>
        <option>de</option>
        <option selected>en</option>
        <option>es</option>
        <option>fr</option>
        <option>hi</option>
      </select>
    </div>
    <div class="input-group">
      <label class="input-group">
        <input type="text" class="input input-bordered" id="translation"/>
      </label>
    </div>
  </div>
</template>
