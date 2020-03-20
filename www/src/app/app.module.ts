import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//texteditor
import { HttpClientModule } from "@angular/common/http";
import { AngularEditorModule } from "@kolkov/angular-editor";

//table
import { MatTableModule } from "@angular/material/table";

//components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { QnaComponent } from "./pages/qna/qna.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { NavBarComponent } from "./layouts/nav-bar/nav-bar.component";
import { NoticeBoardComponent } from "./components/notice-board/notice-board.component";
import { QnaContentComponent } from "./pages/qna/qna-content/qna-content.component";
import { QnaWriteComponent } from "./pages/qna/qna-write/qna-write.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    QnaComponent,
    SignInComponent,
    NavBarComponent,
    NoticeBoardComponent,
    QnaContentComponent,
    QnaWriteComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
