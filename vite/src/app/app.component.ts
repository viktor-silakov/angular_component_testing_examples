import { Component } from '@angular/core';
import { AppService } from './app.service';
import { renderPage } from '@nitedani/angular-renderer-core/client'
import { render, screen, fireEvent } from '@testing-library/angular'

// import {render, screen, fireEvent} from '../testing-library/angular/index'


@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private appService: AppService) {
        console.log('🤡🤡🤡🤡', renderPage)
        // console.log('🤡🤡🤡🤡', render)
        console.log(appService.getHello());
    }
}
