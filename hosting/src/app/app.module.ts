import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { GooglePlacesService } from '@cm/services';
import { environment } from '@cm/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFirestoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
    ],
    providers: [
        GooglePlacesService,
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
