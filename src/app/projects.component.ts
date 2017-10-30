import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgFor } from '@angular/common';

const PROJECTS = [
  {name: 'Huffman',
  description: 'Simple implementation of the Huffman code algorithm. '
  +'Made between second and third semester.',
  techniques: 'C++ 14',
  github: "https://github.com/SubmergedTree/HuffmanCodingLib"},
  {name: 'test2',
  description: 'Simple implementation of the Huffman code algorithm. '
  +'Made between second and third semester.',
  techniques: 'C++ 14',
  github: "https://github.com/SubmergedTree/HuffmanCodingLib"}
];

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = PROJECTS;
}
