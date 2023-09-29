import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  agricultureNews: any;

  constructor(public http: HttpClient) {
    this.loadAgricultureNews();
  }

  loadAgricultureNews() {
    const jsonFile = '../../assets/agriculture_news.json';

    this.http.get(jsonFile).subscribe((data: any) => {
      this.agricultureNews = data;
    });
  }
}


  