

import './style.css'

// Import spline scene via vanillajs runtime: 


import { Application } from 'https://unpkg.com/@splinetool/runtime@1.9.58/build/runtime.js';
			
			const canvas = document.getElementById('canvas3d');
			const app = new Application(canvas);
			

app.load('https://prod.spline.design/NLJQKrY8OvnlPUHJ/scene.splinecode');

			





// Vite scaffold demo code:
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app .vite-demo-content').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

