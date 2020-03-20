import { Component, OnInit, Input, Output } from "@angular/core";

import * as _ from "lodash";

export interface PeriodicElement {
  no: number;
  author: string;
  title: string;
  date: string;
  isSticky?: boolean;
}

let curTime = "" + new Date();

const ELEMENT_DATA: PeriodicElement[] = [
  // {
  //   no: 1,
  //   author: "Hydrogen",
  //   title:
  //     "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
  //   date: curTime,
  //   isSticky: true
  // },
  // { no: 2, author: "Helium", title: "test", date: curTime },
  // { no: 3, author: "Lithium", title: "test", date: curTime },
  // { no: 4, author: "Beryllium", title: "test", date: curTime },
  // { no: 5, author: "Boron", title: "test", date: curTime },
  // { no: 6, author: "Carbon", title: "test", date: curTime },
  // { no: 7, author: "Nitrogen", title: "test", date: curTime },
  // { no: 8, author: "Oxygen", title: "test", date: curTime },
  // { no: 9, author: "Fluorine", title: "test", date: curTime },
  // { no: 10, author: "Neon", title: "test", date: curTime }
];

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["no", "author", "title", "date"];
  dataSource = ELEMENT_DATA;
  isLoaded: boolean = false;
  searchCategory = "";

  @Output() curPage: number = 1;
  @Output() maxPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    let self = this;

    self.isLoaded = !self.isLoaded;
  }

  get(el, key) {
    console.log("get: ", _.get(el.key));
    return _.get(el, key);
  }

  ngAfterViewChecked() {
    console.log("tableside: ", this.searchCategory);
  }

  search() {
    console.log("event");
  }

  routeToContent() {
    alert("content");
  }
}
