import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgFor } from '@angular/common';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public items: any[];
  public isLoading = true;

  constructor(db: AngularFireDatabase){
    db.list('/items').valueChanges().subscribe(items => {
      this.items = items;
      this.isLoading = false;
    });
  }
}
