import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.loadCssFile("assets/vendor/bootstrap/css/bootstrap.min.css");
    // this.loadCssFile("assets/vendor/simple-datatables/style.css");
    // this.loadJsFile("assets/vendor/bootstrap/js/bootstrap.bundle.js");
    // this.loadJsFile("assets/vendor/php-email-form/validate.js");
    // this.loadJsFile("assets/vendor/quill/quill.min.js");
    // this.loadJsFile("assets/vendor/tinymce/tinymce.min.js");
    this.loadJsFile("assets/vendor/simple-datatables/simple-datatables.js");
    // this.loadJsFile("assets/vendor/chart.js/chart.min.js");
    // this.loadJsFile("assets/vendor/apexcharts/apexcharts.min.js");
    // this.loadJsFile("assets/vendor/echarts/echarts.min.js");
    // this.loadJsFile("assets/js/main.js");
  }

  public loadJsFile(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('html')[0].appendChild(node);
  }

  public loadCssFile(url: string) {
    let node = document.createElement('link');
    node.href = url;
    node.rel = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
