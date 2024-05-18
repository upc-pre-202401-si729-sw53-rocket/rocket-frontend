<script setup>
import Sidebar from "@/public/components/sidebar.component.vue";
</script>

<template>
  <Sidebar />
  <section class="flex h-full p-0 sm:p-8">
    <article class="w-50 my-4 sm:my-4 ml-4 sm:ml-8 sm:mx-auto">
      <div class="flex">
        <h1 class="text-3xl">Generate report</h1>
      </div>
      <form>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Email address *" class="py-3"/>
        </div>
        <div class="flex flex-column pb-2 gap-2">
          <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Description *" class="py-3" />
        </div>
        <div class="drop-container mb-4">
          <label for="file-input" class="drop-area flex flex-column align-items-center">
            <div class="icon mb-3">
              <i class="pi pi-upload"></i>
            </div>
            Upload image
            <input type="file" id="file-input" class="file-input mt-3">
          </label>
          <div class="preview-container">
            <img id="preview" alt="Preview" class="preview-image">
          </div>
        </div>
        <div class="flex buttons">
          <Button class="w-full justify-content-center px-8 py-3 mr-3 gray-button">CANCEL</Button>
          <Button class="w-full justify-content-center px-8 py-3 black-button">SAVE</Button>
        </div>
      </form>
    </article>
  </section>
</template>

<style scoped>
.icon {
  scale: 2
}

.gray-button {
  background-color: white;
  color: gray;
  border: 1px solid gray;
}

.drop-container {
  text-align: center;
}

.drop-area {
  border: 2px dashed #aaa;
  border-radius: 1em;
  padding: 4em 0;
  cursor: pointer;
}

.preview-container {
  margin-top: 20px;
}

.preview-image {
  max-width: 100%;
  max-height: 200px;
  display: none;
}

</style>