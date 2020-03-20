import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"]
})
export class PaginatorComponent implements OnInit {
  @Input() curPage: number;
  @Input() maxPage: number;

  isLast: boolean;
  isFirst: boolean = true;
  constructor() {}

  ngOnInit(): void {
    if (this.curPage === 1) this.isFirst = true;
    if (this.curPage === this.maxPage) this.isLast = true;
  }
}
