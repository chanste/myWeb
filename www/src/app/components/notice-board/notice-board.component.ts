import { Component, OnInit, Input } from "@angular/core";

import * as _ from "lodash";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];

@Component({
  selector: "app-notice-board",
  templateUrl: "./notice-board.component.html",
  styleUrls: ["./notice-board.component.scss"]
})
export class NoticeBoardComponent implements OnInit {
  @Input() columns = [];
  @Input() dataList = [];

  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA;

  isLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    //def columns

    for (let i = 0; i < this.displayedColumns.length; i++) {
      let obj = { key: "", name: "" };
      obj["key"] = this.displayedColumns[i];
      obj["name"] = this.displayedColumns[i] + i;

      this.columns.push(obj);
    }

    let self = this;

    self.isLoaded = !self.isLoaded;
  }

  get(el, key) {
    return _.get(el, key);
  }
}
