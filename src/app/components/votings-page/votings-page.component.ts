import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';

import { VotingsProviderService } from '../../services/votings-provider/votings-provider.service';

@Component({
  selector: 'app-votings-page',
  templateUrl: './votings-page.component.html',
  styleUrls: ['./votings-page.component.css']
})
export class VotingsPageComponent implements OnInit {
  items: Object[];

  constructor(
    private router: Router,
    public votingsProviderService: VotingsProviderService) {
    this.votingsProviderService.getAll().subscribe((list) => {
      this.items = list;
    })
  }

  ngOnInit() {
  }

  addVoting() {
  }

  onItemClick(item) {
    this.router.navigate(['/voting-edit', item.$key]);
  }
}
