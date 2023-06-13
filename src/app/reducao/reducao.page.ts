import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reducao',
  templateUrl: './reducao.page.html',
  styleUrls: ['./reducao.page.scss'],
})
export class ReducaoPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
     //sem if pq nn tem a parte de cadastrar os dados ainda
    });
  }

}

