import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  soms: any = []

  constructor() { }

  ngOnInit(): void {
    this.soms = SOMS;
  }

}

const SOMS = [
  {
    name: 'Seth',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id deserunt distinctio, totam, beatae quod, incidunt eos consequatur est ipsum consequuntur possimus! Exercitationem, quisquam id! Exercitationem ipsa suscipit expedita eos illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
    image: '/assets/soms/seth.png',
    wine: {
      label: 'Cabernet Franc',
      color: 'red',
      id: '1'
    }
  },
  {
    name: 'Cam',
    bio: 'Id deserunt distinctio, totam, beatae quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id deserunt distinctio, totam, beatae quod, incidunt eos consequatur est ipsum consequuntur possimus! Exercitationem, quisquam id! Exercitationem ipsa suscipit expedita eos illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
    image: '/assets/soms/cam.png',
    wine: {
      label: 'Chenin Blanc',
      color: 'white',
      id: '4'
    }
  },
  {
    name: 'Chris',
    bio: 'Exercitationem, quisquam id! Exercitationem ipsa suscipit expedita eos illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id deserunt distinctio, totam, beatae quod, incidunt eos consequatur est ipsum consequuntur possimus! Exercitationem, quisquam id! Exercitationem ipsa suscipit expedita eos illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
    image: '/assets/soms/chris.png',
    wine: {
      label: 'Rosé de Pinot Noir',
      color: 'rose',
      id: '6'
    }
  },
  {
    name: 'Nate',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id deserunt distinctio, totam, beatae quod, incidunt eos consequatur est ipsum consequuntur possimus! Exercitationem, quisquam id! Exercitationem ipsa suscipit expedita eos illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id deserunt distinctio, totam, beatae quod, incidunt eos consequatur est ipsum consequuntur possimus! Exercitationem, quisquam id! Exercitationem ipsa suscipit expedita eos illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/assets/soms/nate.png',
    wine: {
      label: 'Côtes du Rhône',
      color: 'red',
      id: '2'
    }
  }
]