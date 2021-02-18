import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {NgForm } from '@angular/forms';
import {BudgetItem} from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('',0);
  constructor() { }

  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();

  }

}
