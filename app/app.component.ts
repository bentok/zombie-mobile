import { Component } from "@angular/core";
import { GridLayout } from "ui/layouts/grid-layout";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Zombie Mobile"></ActionBar>
    <GridLayout rows="60, 60, auto" columns="60, 60" class="header-container" colSpan="6" columns="*,*,*,*,*">
      <Button text="Stats" row="0" col="0" colSpan="2" class="button"></Button>
      <Button text="Inventory" row="0" col="2" colSpan="2" class="button"></Button>
    </GridLayout>
  `,
  styles: [
    `
      .button {
        background: green;
      }
    `
  ]
})
export class AppComponent {}
