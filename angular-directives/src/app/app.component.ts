import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-directives';
  value: boolean = false;

  change(): void {
    this.value = true;
  }
  show: boolean = true;
  phones: String[] = ['IPhone', 'Galaxy 9.0', 'Blackberry 10z'];

  count: number = 1;
  student: string[] = ['C'];

  students: any[] = [
    {
      sno: 1,
      name: 'Charlie',
      course: 'Bsc(Hons)',
      grade: 'A',
    },
    {
      sno: 2,
      name: 'Leslie',
      course: 'BA',
      grade: 'B',
    },
    {
      sno: 3,
      name: 'John',
      course: 'BCom',
      grade: 'A',
    },
    {
      sno: 4,
      name: 'Jack',
      course: 'Bsc(Hons)',
      grade: 'C',
    },
    {
      sno: 5,
      name: 'Shawn',
      course: 'MBA',
      grade: 'B',
    },
    {
      sno: 6,
      name: 'Shilling',
      course: 'msc',
      grade: 'B',
    },
    {
      sno: 7,
      name: 'Tensing',
      course: 'MBA',
      grade: 'A',
    },
    {
      sno: 8,
      name: 'Bob',
      course: 'msc',
      grade: 'C',
    },
    {
      sno: 9,
      name: 'Geroge',
      course: 'MA',
      grade: 'D',
    },
    {
      sno: 10,
      name: 'Weasley',
      course: 'B.Tech',
      grade: 'A',
    },
  ];
}
