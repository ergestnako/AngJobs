import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { DialogContent } from './components/app/dialogcontent'
import { MaterialModule } from '@angular/material';

import { JobsListComponent } from './components/app/jobslist.component';
import { JobComponent } from './components/jobs/job.component';
import { SharedService } from "./services/shared.service";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        DialogContent,
        JobsListComponent,
        JobComponent
    ],
    entryComponents: [DialogContent],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: "job/:id", component: JobComponent },
            { path: '**', redirectTo: 'home' }
           
        ]),
        MaterialModule
    ],
    providers: [SharedService]
})
export class AppModule {
}
