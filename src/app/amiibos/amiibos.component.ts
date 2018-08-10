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
  searchText: any;
  paginator = true;

  constructor(private amiiboService: AmiiboService, private paginationService: PaginationService, private route: ActivatedRoute) { }

  getAmiibos() {
    this.route.params.subscribe(params => {
      if (params.category) {
        this.amiiboService.getFiltered(params.category, params.value).subscribe((amiibos: any) => {
          this.amiibos = amiibos.amiibo;
          this.setPage(1);
        });
      } else {
        this.amiiboService.getAmiibos().subscribe((amiibos: any) => {
          this.amiibos = amiibos.amiibo;
          this.setPage(1);
        });
      }
    });
  }


  setPage(page: number) {
    if (page < 1 || this.pager.totalPages) {
      return;
    }
    this.pager = this.paginationService.getPager(this.amiibos.length, page);
    this.pagedItems = this.amiibos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  setAmiibos() {
    if (!this.searchText) {
      this.paginator = true;
      return this.pagedItems;
    } else {
      this.paginator = false;
      return this.amiibos;
    }
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
