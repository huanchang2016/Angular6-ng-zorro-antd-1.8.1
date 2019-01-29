import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  back() {
    window.history.back();
  } 

  ngOnInit() {
    let canvas = document.createElement('canvas');
    let height = canvas.height = window.innerHeight;
    let width = canvas.width = window.innerWidth;
    let ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    let word_arr = [];
    let txt_min_size = 5;
    let txt_max_size = 25;
    for (let i = 0; i < 25; i++) {
      word_arr.push({
        x: random(0, width),
        y: random(0, height),
        text: '404',
        size: random(txt_min_size, txt_max_size)
      });

      word_arr.push({
        x: random(0, width),
        y: random(0, height),
        text: 'Error Page',
        size: random(txt_min_size, txt_max_size)
      });


      word_arr.push({
        x: random(0, width),
        y: random(0, height),
        text: 'Not Found',
        size: random(txt_min_size, txt_max_size)
      });

      word_arr.push({
        x: random(0, width),
        y: random(0, height),
        text: '404',
        size: Math.floor(random(txt_min_size, txt_max_size))
      });
    }

    function render() {
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#fff";
      for (let i = 0; i < word_arr.length; i++) {
        ctx.font = word_arr[i].size + "px sans-serif";
        let w = ctx.measureText(word_arr[i].text);
        ctx.fillText(word_arr[i].text, word_arr[i].x, word_arr[i].y);
      
        word_arr[i].x += range_map(word_arr[i].size, txt_min_size, txt_max_size, 2, 3);

        if (word_arr[i].x >= width) {
          word_arr[i].x = -w.width * 2;
          word_arr[i].y = random(0, height);
          word_arr[i].size = Math.floor(random(txt_min_size, txt_max_size));

        }
      }

      ctx.fill();

      requestAnimationFrame(render);
    }

    render();

    function random(min:number, max:number) {
      return Math.random() * (max - min + 1) + min;
    }

    function range_map(value:number, in_min:number, in_max:number, out_min:number, out_max:number) {
      return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

  }
}
