<template>
  <div class="card">
    <div class="card-image"><img src="https://lh3.ggpht.com/2ya_fevbC0CmTxVdp1P445ZiwwtHWiPe5Gd17cAFOYmlcMkjUVFvuS-R5puYTEg3xw=h900" alt=""></div>
  	<div class="card-header">Title</div>
    <div class="card-body">Body</div>
    <div class="card-footer">Footer</div>
  </div>
</template>
<script>

export default {
	props: {
    format: {
      type: String,
      default: "dddd, HH:mm",
      required: false
    }
  }
}

</script>
<style scoped>
.card {
  background: #fff;
  max-width: 400px;
  min-width: 100px;
  min-height: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 1rem;
  margin: 0 auto;
}
.card-image > img {
  width: 100%;
  max-height: 300px;
}
.card-image {
  max-height: 300px;
}

.card > :first-child > img {
  border-radius: 1rem 1rem 0 0;
}
.card > :nth-child(2) {
  border-radius: 1rem 1rem 0 0;
}

</style>
