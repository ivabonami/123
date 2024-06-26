<template>
    <div class="fluid">
        <div class="row">
            <div class="logo">
                <base-logotype></base-logotype>
            </div>
            <div class="prone"></div>
            <div class="logo"></div>
            <div class="logo"></div>
        </div>
    </div>
    

</template>
<script>
import BaseLogotype from '../Layout/BaseLogotype.vue'

export default {
  components: { BaseLogotype },
    name: "BaseHeader.vue",
    
    data() {
        return {
            
        }
    },
    
}
</script>
<style lang="scss">
    .fluid {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
    }
</style>