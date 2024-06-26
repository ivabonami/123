<template lang="html">
    <button 
    @click="onPressed"
    class="button secondary">
        <slot name="button-text" />
    </button>
</template>
<script>
export default {
    name: "ButtonSecondary.vue",
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