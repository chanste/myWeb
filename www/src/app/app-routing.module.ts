import { NgModule } from "@angular/core";

//routes
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { QnaComponent } from "./pages/qna/qna.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { NavBarComponent } from "./layouts/nav-bar/nav-bar.component";
import { QnaContentComponent } from "./pages/qna/qna-content/qna-content.component";
import { QnaWriteComponent } from "./pages/qna/qna-write/qna-write.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "main/about-me"
  },
  {
    path: "main",
    component: NavBarComponent,
    children: [
      { path: "about-me", component: AboutMeComponent },
      {
        path: "qna",
        component: QnaComponent,
        children: [
          { path: `content/:id`, component: QnaContentComponent },
          { path: "write/:id", component: QnaWriteComponent }
        ]
      }
    ]
  },
  { path: "sign-in", component: SignInComponent },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
