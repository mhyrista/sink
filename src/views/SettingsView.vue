<script setup lang="ts">
import { useSettingsStore } from "@/stores/settings";
const settings = useSettingsStore();
</script>

<template>
  <br />
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text"
        ><strong>Cognitive Services Subscription Key</strong></span
      >
    </label>
    <input
      v-model="settings.apikey"
      type="text"
      placeholder="Type here"
      class="input input-bordered w-full max-w-xs"
    />
    <label class="label">
      <span class="label-text-alt"
        >Example: e000cad0902x44f0x0c02xxxe12xxx3</span
      >
    </label>
  </div>
  <br />
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text"
        ><strong>Pick your Cognitive Services Region</strong></span
      >
    </label>
    <select class="select select-bordered" v-model="settings.azureregion">
      <option>westeurope</option>
      <option>northeurope</option>
      <option>westus</option>
      <option>eastus</option>
      <option>germanywestcentral</option>
    </select>
  </div>
</template>
