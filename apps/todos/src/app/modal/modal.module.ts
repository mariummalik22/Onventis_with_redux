import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalRouterModule} from './modal-router.module';
import {RouterModule} from '@angular/router';
import {ModalComponent} from './modal.component'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { CreateEffects } from '../+state/create.effects';
import { StoreModule} from '@ngrx/store';
import * as fromCreateActions from '../+state/create.reducer';
import { CreateFacade } from '../+state/create.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataPersistence } from '@nrwl/angular';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations: [ModalComponent],
    imports: [
        CommonModule,
        RouterModule,
        ModalRouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 10
          }),
        EffectsModule.forRoot([]),
        StoreModule.forFeature(fromCreateActions.CREATE_FEATURE_KEY, fromCreateActions.reducer),
        EffectsModule.forFeature([CreateEffects])
    ],
    providers: [CreateFacade, DataPersistence],
    exports: [],
    entryComponents: [ModalComponent]
})
export class ModalModule {
}
