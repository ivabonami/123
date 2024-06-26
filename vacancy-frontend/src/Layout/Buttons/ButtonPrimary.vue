<template lang="html">
    <button 
    @click="onPressed"
    class="button primary">
        <slot name="button-text" > </slot>
    </button>
</template>
<script>
export default {
    name: "ButtonPrimary.vue",
    data() {
        return {
            
        }
    },
    methods: {
        onPressed() {
            this.$emit('buttonPressed', true)
        }
    },
}
</script>
<style lang="">
    
</style>