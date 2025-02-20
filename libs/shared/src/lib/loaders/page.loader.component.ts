import { Component } from '@angular/core';

@Component({
    selector: 'app-page-loader',
    template: `<div class="loader-container"><div class="loader"></div></div>`,
    standalone: true,
    styles:`
    .loader-container{
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    right:0;
    bottom:0;
    position: absolute;
    background: linear-gradient(#4f9ca9, #f8c9b3);
    z-index: 10;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .loader {
    width: 100px;
    height: 45px;
    top:0;
    left:0;
    right:0;
    bottom:0;
    --g1:conic-gradient(from  90deg at left   3px top   3px,#0000 90deg,#fff 0);
    --g2:conic-gradient(from -90deg at bottom 3px right 3px,#0000 90deg,#fff 0);
    background:var(--g1),var(--g1),var(--g1), var(--g2),var(--g2),var(--g2);
    background-position: left,center,right;
    background-repeat: no-repeat;
    animation: l8 1s infinite;
  }
  @keyframes l8 {
    0%   {background-size:25px 100%,25px 100%,25px 100%}
    20%  {background-size:25px 50% ,25px 100%,25px 100%}
    40%  {background-size:25px 50% ,25px 50% ,25px 100%}
    60%  {background-size:25px 100%,25px 50% ,25px 50% }
    80%  {background-size:25px 100%,25px 100%,25px 50% }
    100% {background-size:25px 100%,25px 100%,25px 100%}
  }
    `
})
export class PageLoaderComponent {}

