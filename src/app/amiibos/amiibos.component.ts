import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service';
import { Amiibo } from '../interface/amiibo';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  public amiibos: Amiibo[];

  constructor(private amiiboService: AmiiboService) { }

    /* call function from service.ts
    myFunction() {
        // sthis.amiiboService.myFunction();
    }
    */

    getAmiibos() {
      this.amiiboService.getAmiibos().subscribe( (amiibos: any) => this.amiibos = amiibos.amiibo);
    }


  ngOnInit() {
    // this.myFunction(); Console logs 'AAAH' from service
    this.getAmiibos();
  }

}
