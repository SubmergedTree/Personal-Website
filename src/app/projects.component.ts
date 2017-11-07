import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgFor } from '@angular/common';

import {AngularFireDatabase} from 'angularfire2/database';

/*
const PROJECTS = [
  {name: 'Huffman',
  description: 'Simple implementation of the Huffman code algorithm. '
  +'Made between second and third semester.',
  techniques: 'C++ 14',
  github: "https://github.com/SubmergedTree/HuffmanCodingLib"},
  {name: 'This Website',
  description: 'I made this website to refresh my Angular knowledge.',
  techniques: 'Angular, CSS, HTML, Typescript',
  github: "https://github.com/SubmergedTree/Personal-Website"},
  {name: 'renderer',
  description: 'The purpose of this project was to learn basic opengl. '
  +'It features a terrain renderer using heightmaps',
  techniques: 'C++, SFML, openGL, GLSL',
  github: "https://github.com/SubmergedTree/renderer"}
];*/

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

//  projects = PROJECTS;
}
