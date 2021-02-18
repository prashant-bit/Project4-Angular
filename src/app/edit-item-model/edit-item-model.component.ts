import { Component, OnInit,Input , Output} from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  @Input() item!: BudgetItem
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem : BudgetItem)
  {
    

  }

}
