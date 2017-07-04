import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voting-edit',
  templateUrl: './voting-edit.component.html',
  styleUrls: ['./voting-edit.component.css']
})
export class VotingEditComponent implements OnInit {
  @Input() data: Object;

  constructor() { }

  ngOnInit() {
  }

  formChange(value, key) {
    this.data[key] = value;
  }

}
