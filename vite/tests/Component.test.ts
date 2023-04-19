import { $, expect } from '@wdio/globals'
import 'zone.js/dist/zone';
import '@angular/compiler';

import { render, screen, fireEvent } from '@testing-library/angular'

import { ɵresolveComponentResources } from '@angular/core'
import { renderPage } from '@nitedani/angular-renderer-core/client'
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from '../src/app/app.component';
import { AppService } from '../src/app/app.service';


describe('WebdriverIO Component Testing', async function ()  {
    // const res = renderPage({
    //     page: AppComponent,
    //     // imports: [AppService],
    //     providers: [AppService, provideHttpClient()],
    // });
    // console.log('👺👺👺👺👺', res)

    // await render(AppComponent)
    await render(AppComponent, {
        providers: [AppService],
    });


    beforeEach(() => {

    })
    it('should be able to render to the DOM and assert', async () => {
        // console.log('🚀', AppComponent?.templateUrl, AppComponent?.styleUrls, ɵresolveComponentResources(AppComponent))
        await browser.debug()


        // resolveComponentResources()
        // renderPage({
        //     page: resolveComponentResources() AppComponent,
        //     // imports: [SharedModule],
        //     providers: [provideHttpClient()],
        // });

        // console.log('👹', renderPage);
        // console.log('👹', render);

        // const component = document.createElement('button')
        // component.innerHTML = 'Hello World!'
        // document.body.appendChild(component)
        //
        // await expect($('aria/Hello World!')).toBePresent()
        // component.remove()
        // await expect($('aria/Hello World!')).not.toBePresent()
        // await browser.debug()
    })
})
