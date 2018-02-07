import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { MovieService } from './services/MovieService'


@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [{
    provide: 'apiKey', useValue: '1f026f3c85aa4f2c1e4a4df7c3e11f47'
  }, {provide: 'movieService', useClass: MovieService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
