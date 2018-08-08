import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service';
import { PaginationService } from '../services/pagination.service';
import { Amiibo } from '../interface/amiibo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {
  public amiibos: Amiibo[];
  pager: any = {};
  pagedItems: any = [];

  constructor(private amiiboService: AmiiboService, private paginationService: PaginationService, private route: ActivatedRoute) { }
  getAmiibos() {

  }

  setPage(page: number) {
    if (page < 1 || this.pager.totalPages) {
      return;
    }
    this.pager = this.paginationService.getPager(this.amiibos.length, page);
    this.pagedItems = this.amiibos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  // myFunction() {
  //   this.amiiboService.myFunction();
  //   this.amiiboService.anotherFunc();
  // }
  // anotherFunc() {
  //   this.amiiboService.anotherFunc();
  // }
  ngOnInit() {
    // this.myFunction();
    // this.anotherFunc();
    this.getAmiibos();
  }

}
