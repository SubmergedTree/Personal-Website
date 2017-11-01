import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgFor } from '@angular/common';

const PROJECTS = [
  {name: 'Huffman',
  description: 'Simple implementation of the Huffman code algorithm. '
  +'Made between second and third semester.',
  techniques: 'C++ 14',
  github: "https://github.com/SubmergedTree/HuffmanCodingLib"},
  {name: 'This Website',
  description: 'I made this website to learn angular 2/4.',
  techniques: 'Angular, CSS, HTML, Typescript',
  github: "https://github.com/SubmergedTree/Personal-Website"},
  {name: 'renderer',
  description: 'The purpose of this project was to learn basic opengl.'
  +'It features an terrain renderer using heightmaps',
  techniques: 'Angular, CSS, HTML, Typescript',
  github: "https://github.com/SubmergedTree/renderer"}
];

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = PROJECTS;
}
