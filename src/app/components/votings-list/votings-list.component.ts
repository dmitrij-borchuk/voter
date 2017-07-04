import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-votings-list',
  templateUrl: './votings-list.component.html',
  styleUrls: ['./votings-list.component.css']
})
export class VotingsListComponent implements OnInit {
  @Input() data: Object[];
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemClickHandler(item) {
    this.onItemClick.emit(item);
  }
}
