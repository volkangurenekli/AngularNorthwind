import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = [
    {
      id: 0,
      url: 'https://i.picsum.photos/id/539/1600/900.jpg?hmac=JNi3Rhqi8U5HMzuK0_4-3Dvx5gndE5lI0HEOD46HgdA',
      label: 'First slide label',
      description:
        'Some representative placeholder content for the first slide.',
    },
    {
      id: 1,
      url: 'https://i.picsum.photos/id/834/1600/900.jpg?hmac=IL_RXb09Q4RKC7MVBik6vdxhcLUBQhrwA-JYXgrziO8',
      label: 'Second slide label',
      description:
        'Some representative placeholder content for the first slide.',
    },
    {
      id: 2,
      url: 'https://i.picsum.photos/id/505/1600/900.jpg?hmac=X0C60upSLhpuGHIo7NxbCbDDlNVvuCCfoG2rZ_k3rMY',
      label: 'Third slide label',
      description:
        'Some representative placeholder content for the first slide.',
    },
  ];

  selectedItem: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setSelectedItem(param: number) {
    let selected = this.selectedItem + param + this.list.length;
    this.selectedItem = selected % this.list.length;
  }

  slideTo(param: number) {
    this.selectedItem = param;
  }
}
