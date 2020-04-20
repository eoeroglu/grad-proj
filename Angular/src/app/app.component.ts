import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  selectBoxDatas: { id: number; value: string }[] = [
    { id: 1, value: "Yağlar" },
    { id: 2, value: "Deodorantlar" },
    { id: 3, value: "HHC" },
    { id: 4, value: "Ambalaj" },
    { id: 5, value: "Meme" },
  ];

  selectedData: { id: number; value: string };

  constructor(private http: HttpClient) {}

  changed(selectedID: number) {
    //    this.http.post
  }
}
