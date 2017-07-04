import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';

import { VotingsProviderService } from '../../services/votings-provider/votings-provider.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-voting-edit-page',
  templateUrl: './voting-edit-page.component.html',
  styleUrls: ['./voting-edit-page.component.css']
})
export class VotingEditPageComponent implements OnInit {
  item = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MdSnackBar,

    private votingsProviderService: VotingsProviderService
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const id = params.get('id');

      if (id) {
        return this.votingsProviderService.get(id);
      } else {
        return Observable.of([{}]);
      }
    }).subscribe(data => {
      if (!data.$exists()) {
        this.goBack();
      } else {
        this.item = data;
      }
    });
  }

  goBack() {
    this.router.navigate(['/votings']);
  }

  saveClick(item) {
    this.votingsProviderService.update(item).then(
      () => this.goBack()
    ).catch(
      (err) => this.showMessage(err.message)
    );
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
    });
  }
}
