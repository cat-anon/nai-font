<script>
  import { saveAs } from 'file-saver'
	import { onMount } from 'svelte';
  let selectedFile = null;
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

  async function handleFileChange(event) {
    selectedFile = event.target.files[0];
    if (selectedFile.name.endsWith('.naitheme')) {
    theme = await selectedFile.text();
    console.log(theme)
     themename = selectedFile.name;

      return;
    } 
    let json = JSON.parse(theme)
    let base64 = await toBase64(selectedFile);
    json['global'] += `@font-face {font-family: 'MyFontFamily';src: url(${base64});}`
      json['fonts']['default'] = 'MyFontFamily'
      json['fonts']['code'] = 'MyFontFamily'
      json['fonts']['field'] = 'MyFontFamily'
      json['fonts']['headings'] = 'MyFontFamily'
      json['fonts']['selectedHeadings'] = 'MyFontFamily'
      json['fonts']['selectedDefault'] = 'MyFontFamily'


    
    var blob = new Blob([JSON.stringify(json)], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob,themename)

  }
  let theme = '';
  let themename = 'NovelAI Dark.naitheme';

  onMount(async () => {
    const response = await fetch("/NovelAI Dark.naitheme");
    theme = await response.text();
  });
</script>

<main>
  <h1>NovelAI font uploader for anon.</h1>
  <p>Upload a .theme file if your want to add font to an existing theme, or add font right away for default theme.</p>
  <input type="file" accept=".naitheme, .ttf, .otf" on:change={handleFileChange} />
</main>