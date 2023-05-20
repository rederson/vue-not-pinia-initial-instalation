<script setup>
import { useCounter } from '@/stores/counter';
import {storeToRefs} from 'pinia';
const counter = useCounter();
// desustruturação
const {count, getCounter, name} = storeToRefs(counter);
const {increment} = counter; // actions coloca diretamente, não precisa de Refs

counter.$state = {count: 100, name: 'Maria'};

function reset() {
    counter.$reset();
}

function add() {
    counter.$patch({
        count: count.value + 10,
        name: 'João'
    });
}
</script>

<template>
  {{ count }} {{ name }}
  <button @click='increment'>
    Add
  </button>
  <hr>
  {{ getCounter }}
  <hr>
  <button @click='add'>
    Add 10
  </button>
  <hr>
  <button @click='reset'>
    Reset
  </button>
</template>
