import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataPersistence } from '@nrwl/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CreateEffects } from './+state/create.effects';
import * as fromCreateActions from './+state/create.reducer';
import { CreateFacade } from './+state/create.facade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TaskService} from './shared/task.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ModalModule } from './modal/modal.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreModule.forFeature(fromCreateActions.CREATE_FEATURE_KEY, fromCreateActions.reducer),
    EffectsModule.forFeature([CreateEffects]),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  providers: [TaskService,CreateFacade,DataPersistence,
    {
      provide: MatDialogRef,
      useValue: {}
    }, {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }],
  bootstrap: [AppComponent]
})
export class AppModule {}
