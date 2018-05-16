import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
    templateUrl: './index.html',
    animations: [routerTransition()]
})
export class IndexComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit() {}

}
