import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {MachineState} from '../../store/machine.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Machine} from '../../models/machine.model';
import {selectAllMachines} from '../../store/machine.selectors';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'pulpe-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class MachinesComponent implements OnInit {
  machines$: Observable<Machine[]>;

  constructor(private store: Store<MachineState>) {
  }

  ngOnInit(): void {
    this.machines$ = this.store.select(selectAllMachines);
  }

  onDelete(machine: Machine): void {
  }
}
