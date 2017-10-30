import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private route: string;
  private about = true;
  private projects = false;

  constructor(location: Location, router: Router) {
      router.events.subscribe((val) => {
          if(location.path() != '') {
            this.route = location.path();
          } else {
            this.route = 'About';
          }
        /*  console.log(this.route);*/

          if(this.route === 'About') {
              this.about = true;
              this.projects = false;
          } else if(this.route === '/projects') {
            this.about = false;
            this.projects = true;
          }

      });
  }

}
