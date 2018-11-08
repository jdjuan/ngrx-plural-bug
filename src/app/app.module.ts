import * as fromUser from './user/user.reducer';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('user', fromUser.reducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
