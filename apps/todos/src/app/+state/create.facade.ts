import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { CreatePartialState } from './create.reducer';
import { createQuery } from './create.selectors';
import { LoadRoles, ShowModal } from './create.actions';

@Injectable()
export class CreateFacade {
  roles$ = this.store.pipe(select(createQuery.getRoles));

  constructor(private store: Store<CreatePartialState>) {}


  loadRoles() {
    this.store.dispatch(new LoadRoles());
  }

  showModal()
  {
      this.store.dispatch(new ShowModal());
  }
}
