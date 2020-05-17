import { Component, OnInit, ElementRef, Inject } from "@angular/core";
import { Papa } from "ngx-papaparse";
declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-jquery-test",
  templateUrl: "./jquery-test.component.html",
  styleUrls: ["./jquery-test.component.scss"],
})
export class JqueryTestComponent implements OnInit {
  private el: ElementRef;

  constructor(@Inject(ElementRef) el: ElementRef, private papa: Papa) {
    this.el = el;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.el || !this.el.nativeElement || !this.el.nativeElement.children) {
      console.log("cant build without element");
      return;
    }

    var container = this.el.nativeElement;
    var inst = jQuery(container);
    var targetElement = inst.find("#output");

    if (!targetElement) {
      console.log("cant find the pivot element");
      return;
    }

    while (targetElement.firstChild) {
      targetElement.removeChild(targetElement.firstChild);
    }

    let abc = this;
    $(function () {
      abc.papa.parse(
        "https://raw.githubusercontent.com/nicolaskruchten/Rdatasets/master/csv/datasets/iris.csv",
        {
          download: true,
          skipEmptyLines: true,
          complete: function (parsed) {
            debugger;
            targetElement.pivotUI(parsed.data, {
              rows: ["Petal.Length"],
              cols: ["Petal.Width", "Species"],
            });
          },
        }
      );
    });
  }
}
