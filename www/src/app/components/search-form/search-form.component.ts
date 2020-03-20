import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

class SearchCategory {
  category: string;
}

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  @Input() searchCategory: SearchCategory;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  change() {
    console.log("searchCategory: ", this.searchCategory);
  }
}
