<script setup>
import Sidebar from "@/public/components/sidebar.component.vue";
</script>

<template>
  <Sidebar />
  <section class="mx-auto card p-8">
    <section class="flex">
      <h1 class="mx-auto text-5xl">Help & center</h1>
    </section>
    <Accordion :activeIndex="0">
      <AccordionTab header="Can I access RocketOrganize from mobile devices?">
        <p class="m-0">
          Yes, you can access [App Name] from mobile devices through our mobile apps for iOS and Android, allowing you to create, edit, and collaborate on your documents from anywhere.
        </p>
      </AccordionTab>
      <AccordionTab header="How can I get technical support if I have problems with the application?">
        <p class="m-0">
          We offer technical support through our online help center, where you can find help articles, tutorials, and FAQs. You can also contact our support team directly via email or live chat.
        </p>
      </AccordionTab>
      <AccordionTab header="Is it possible to upload notes to the app from different devices?">
        <p class="m-0">
          Yes, our app is designed to be compatible with multiple devices. You can access and upload notes from your computer, mobile phone or tablet, as long as you have Internet access.
        </p>
      </AccordionTab>
      <AccordionTab header="Does the app offer any search functionality to quickly find my notes?">
        <p class="m-0">
          Yes, the app has a powerful search feature that allows you to quickly find your notes and attachments. Simply enter keywords in the search bar and the app will display relevant results.
        </p>
      </AccordionTab>
    </Accordion>
  </section>
</template>

<style scoped>

</style>