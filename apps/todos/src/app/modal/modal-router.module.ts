import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModalComponent} from './modal.component'

const routes: Routes = [
    {    
    path: 'modal', component: ModalComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ModalRouterModule {
}
