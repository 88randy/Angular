import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import {
  NgbPaginationModule,
  NgbAlertModule
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgbPaginationModule, NgbAlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
