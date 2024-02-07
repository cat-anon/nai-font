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

let font

  async function handleFileChange(event) {
    selectedFile = event.target.files[0];
    if (selectedFile.name.endsWith('.naitheme')) {
    theme = await selectedFile.text();
     themename = selectedFile.name;

    } else {
      font = selectedFile
    }
    if (!font) 
      return;
    let json = JSON.parse(theme)
    let base64 = await toBase64(selectedFile);
    const fontname = selectedFile.name.split('.')[0]
    json['global'] += `@font-face {font-family: '${fontname}';src: url(${base64});}`
      json['fonts']['default'] = fontname
      json['fonts']['code'] = fontname
      json['fonts']['field'] = fontname
      json['fonts']['headings'] = fontname
      json['fonts']['selectedHeadings'] = fontname
      json['fonts']['selectedDefault'] = fontname


    
    var blob = new Blob([JSON.stringify(json)], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob,themename)

  }
  let theme = `{
  \"name\": \"NovelAI Dark\",
  \"fonts\": {
    \"default\": \"\\"Source Sans Pro\\", -apple-system, BlinkMacSystemFont, \\"Segoe UI\\",             \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif\",
    \"code\": \"\\"Source Code Pro\\", Menlo, Monaco, Consolas, \\"Courier New\\", monospace\",
    \"field\": \"\\"Source Sans Pro\\", -apple-system, BlinkMacSystemFont, \\"Segoe UI\\",             \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif\",
    \"headings\": \"\\"Eczar\\"\",
    \"selectedHeadings\": \"Eczar\",
    \"selectedDefault\": \"Source Sans Pro\"
  },
  \"colors\": {
    \"bg0\": \"#0E0F21\",
    \"bg1\": \"#13152C\",
    \"bg2\": \"#191B31\",
    \"bg3\": \"#22253F\",
    \"textHeadings\": \"#F5F3C2\",
    \"textMain\": \"#FFFFFF\",
    \"textHeadingsOptions\": [
      \"#F5F3C2\",
      \"#EC56A7\",
      \"#75CF67\",
      \"#9773FF\"
    ],
    \"textMainOptions\": [
      \"#FFFFFF\",
      \"#E7FFE9\",
      \"#FFF9C8\",
      \"#A5C9FF\"
    ],
    \"textDisabled\": \"#FFFFFFA0\",
    \"textPlaceholder\": \"#FFFFFF77\",
    \"warning\": \"#FF7878\",
    \"textHighlight\": \"rgba(255, 120, 120, 0.4)\",
    \"textPrompt\": \"#F5F3C2\",
    \"textUser\": \"#9CDCFF\",
    \"textEdit\": \"#F4C7FF\",
    \"textAI\": \"#FFFFFF\"
  },
  \"breakpoints\": {
    \"mobile\": \"1200px\",
    \"desktop\": \"1600px\"
  },
  \"transitions\": {
    \"interactive\": \"0.08s ease-in-out\"
  },
  \"global\": \"\"
}`;
  let themename = 'NovelAI Dark.naitheme';


</script>

<main>
  <h1>NovelAI font uploader for anon.</h1>
    <p>Simply upload your theme, and your font.</p>
  <input type="file" accept=".naitheme, .ttf, .otf" on:change={handleFileChange} />
  <input type="file" accept=".naitheme, .ttf, .otf" on:change={handleFileChange} />
    <p>If you still don't have your download, click here.</p>
</main>