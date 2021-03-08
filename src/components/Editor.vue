<template>
  <ckeditor
    :editor="editor"
    v-model="editorData"
    :config="editorConfig"
  ></ckeditor
></template>
<script>
import { defineComponent, ref } from "vue";
import BalloonEditor from "@ckeditor/ckeditor5-build-classic";

export default defineComponent({
  name: "Editor",
  setup() {
    const editor = BalloonEditor;
    const editorData = ref("");
    const editorConfig = {};
    return { editor, editorData, editorConfig };
  }
});
</script>
<style></style>
