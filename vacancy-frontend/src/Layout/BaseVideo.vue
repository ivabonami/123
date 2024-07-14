<template>
  <div class="row">
    <div class="video">
      <video loop muted autoplay>
        <source :src="video.path" type="video/webm">
      </video>
    </div>
  </div>

</template>
<script>
import {video} from "@/Stores/video.js";

export default {
  name: 'BaseVideo',
  data() {
    return {
      video
    }
  },

}
</script>

<style lang="scss" scoped>
.video {
  margin-top: 30px;
  width: 100%;
  aspect-ratio: 16 / 9;
  video {
    width: 100%;

  }
}
</style>