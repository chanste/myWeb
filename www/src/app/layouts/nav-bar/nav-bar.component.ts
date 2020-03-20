import { Component, OnInit } from "@angular/core";
import { config } from "src/app/app.config";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  //login stat
  isSignedIn: boolean = config.userInfo.isSignedIn;
  userName: string = config.userInfo.name;

  constructor() {}

  ngOnInit(): void {}

  routeToAboutMe(): void {}
}
