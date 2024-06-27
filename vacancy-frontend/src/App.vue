<script setup>
import BaseHeader from './Blocks/BaseHeader.vue';
import {RouterView} from 'vue-router'
import HeroBanner from "@/Components/HeroBanner.vue";
import BaseSeparator from "@/Layout/BaseSeparator.vue";
import BaseVacancies from "@/BaseVacancies.vue";</script>

<template>
  <BaseHeader />
  <HeroBanner />
  <BaseSeparator />


  <BaseVacancies />


  <RouterView />
</template>

