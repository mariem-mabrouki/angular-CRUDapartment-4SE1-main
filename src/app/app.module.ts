import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { TestComponent } from './test/test.component';
import { ApartmentsComponent } from './appartement/apartments/apartments.component';
import { AddAppartmentComponent } from './appartement/add-appartment/add-appartment.component';
import { HttpClientModule } from '@angular/common/http';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { EditResidenceComponent } from './edit-residence/edit-residence.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ResidenceComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    TestComponent,
    ApartmentsComponent,
    AddAppartmentComponent,
    AddResidenceComponent,
    EditResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
