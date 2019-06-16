import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  public ngOnInit() {
    $(document).ready(function () {
      /* $(".label").mouseover(function (event) {
        /* Act on the event */
        /*$(this).addClass('label-danger');
      }); */
      $(".top-arr").click(function () {
        $('.btns').animate({
          scrollTop: $(".btns-wrapper").position().top
        }, 800);
      });
      $(".bottom-arr").click(function () {
        $('.btns').animate({
          scrollTop: $(".btns").height()
        }, 800);
      });
    });
  }
}
