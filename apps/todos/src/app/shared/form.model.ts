export interface FormInterface {
    title: string;
    meta: string[];
    description: string;
    id: number;
    time_spent: number;
    estimation: number;
    status: string;
    created_on: string;

}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormFields implements FormInterface {
    id: number;
    title: string;
    meta: any;
    description: string;   
    time_spent: number;
    estimation: number;
    status: string;
    created_on: string;

    constructor() {
        this.id = 0;
        this.meta = {"persons_involved":[]};
        this.description = '';
        this.title='';
        this.time_spent = 0;
        this.estimation = 0;
        this.created_on = '';
        this.status = '';
    }
}
