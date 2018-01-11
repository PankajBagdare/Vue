<template>
<div class="alert">
  
  <div v-for="message in notifications" class="alert alert-{{message.type}}">
    {{message.text}}
  </div>
</div> 
</template>

<script>
  
  export default {
    name: 'Flash',
    data: {
      notifications: []
    }
    methods: {
      
    }
  }
</script>