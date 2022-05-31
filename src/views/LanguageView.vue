<script setup lang="ts">
import { reactive } from "vue";
import { useSettingsStore } from "@/stores/settings";

// import {
//   TranslatorTextClient,
// } from "@azure/cognitiveservices-translatortext";

// import {
//   TextAnalyticsClient,
//   AzureKeyCredential,
// } from "@azure/ai-text-analytics";

const uuidv4 = require('uuid/v4');
const request = require('request');
const settings = useSettingsStore();
const endpoint = "https://" + settings.azureregion + ".api.cognitive.microsoft.com/";
// const documents = [];
var translation = "";
// const sentiment = "";
const sentence = "";
const language1 = "";
const language2 = "";

function onGo(){
  translation = "das funktioniert noch nicjt"
  // documents.push(sentence);
  // documents.push("text: " + sentence);
  // sentiment = await taclient.analyzeSentiment(documents);
  // translation = await ttclient.translator.detect(documents);

}

// function translateText(){
//     let options = {
//         method: 'POST',
//         baseUrl: endpoint,
//         url: 'translate',
//         qs: {
//           'api-version': '3.0',
//           'to': [language1, language2]
//         },
//         headers: {
//           'Ocp-Apim-Subscription-Key': settings.apikey,
//           'Ocp-Apim-Subscription-Region': settings.azureregion,
//           'Content-type': 'application/json',
//           'X-ClientTraceId': uuidv4().toString()
//         },
//         body: [{
//               'text': sentence
//         }],
//         json: true,
//     };

//     request(options, function(err, res, body){
//         console.log(JSON.stringify(body, null, 4));
//     });
// };

// Call the function to translate text.
// translateText();

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
    </div>
    <div class="input-group">
      <label class="input-group">
        <input type="text" placeholder="I am really interested in AI and happy to try it" class="input input-bordered" v-model="sentence"/>
        <button class="btn" @click="onGo">translate</button>
      </label>
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
    </div>
  </div>
  To do: {{ translation }}
</template>
