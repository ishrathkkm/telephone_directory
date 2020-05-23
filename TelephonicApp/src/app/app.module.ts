import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TelephoneDirectoryComponent } from './telephone-directory/telephone-directory.component';
import { PersonService } from './person.service';
import { FilterPipe } from './filter.pipe';
import { TelephoneItemComponent } from './telephone-item/telephone-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TelephoneDirectoryComponent,
    FilterPipe,
    TelephoneItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
