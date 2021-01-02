

const [myTextArea, myCssArea, myJsArea] = document.querySelectorAll('.html, .css, .js');
let htmlEditor = CodeMirror.fromTextArea(myTextArea, {
  mode: 'htmlmixed',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
let cssEditor = CodeMirror.fromTextArea(myCssArea, {
  mode: 'css',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
let jsEditor = CodeMirror.fromTextArea(myJsArea, {
  mode: 'javascript',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
const [button, iframe] = document.querySelectorAll('#run, iframe');
button.addEventListener('click', () => {
  const fullHTML = `
    <!doctype html><html>
      <head><meta charset="UTF-8"><style>${cssEditor.getValue()}</style></head>
      <body>${htmlEditor.getValue()}<script>${jsEditor.getValue()}</script></body>
    </html>`;
  iframe.src = 'data:text/html,' + encodeURIComponent(fullHTML);
});

const radioButtons = document.getElementsByName('radiotabs');
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function () {
    const id = radioButtons[i].id;
    if (id === "htmlEditor") {
      htmlEditor.refresh();
    } else if (id === "cssEditor") {
      cssEditor.refresh();
    } else {
      jsEditor.refresh();
    }

  })
}
