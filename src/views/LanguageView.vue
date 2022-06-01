<script setup lang="ts">
import { reactive } from "vue";
import { useSettingsStore } from "@/stores/settings";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const settings = useSettingsStore();
var language = "";
var inputsentence = "";
var res = "";

function send(){
  inputsentence = (document.getElementById("inputtext")! as HTMLInputElement).value;
  translateText();

}

function translateText(){
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
        'to': [language]
    },
    data: [{
        'text': inputsentence
    }],
    responseType: 'json'
  }).then(function(response){
    (document.getElementById("translation")! as HTMLInputElement).value = (JSON.stringify(response.data[0].translations[0]["text"]));
  })
};
</script>

<template>
  <div class="form-control">
    <div class="input-group">
      <label class="input-group">
        <input type="text" placeholder="I am really interested in AI and happy to try it" class="input input-bordered" id="inputtext"/>
        <button class="btn" @click="send">translate</button>
      </label>
    </div>
  </div>
  <div class="form-control">
    <div class="btn-group">
      <select class="select select-bordered" v-model="language">
        <input type="radio" name="options" data-title="de" class="btn" />
        <input type="radio" name="options" data-title="en" class="btn" checked />
        <input type="radio" name="options" data-title="es" class="btn" />
        <input type="radio" name="options" data-title="fr" class="btn" />
      </select>
    </div>
    <div class="input-group">
      <label class="input-group">
        <input type="text" class="input input-bordered" id="translation"/>
      </label>
    </div>
  </div>
</template>
