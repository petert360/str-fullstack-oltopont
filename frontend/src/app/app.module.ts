import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { AdminComponent } from './page/admin/admin.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { PatientListComponent } from './page/patient-list/patient-list.component';
import { PlaceListComponent } from './page/place-list/place-list.component';
import { AdverseEventListComponent } from './page/adverse-event-list/adverse-event-list.component';
import { VaccinationListComponent } from './page/vaccination-list/vaccination-list.component';
import { VaccineListComponent } from './page/vaccine-list/vaccine-list.component';
import { AdverseEventEditComponent } from './page/adverse-event-edit/adverse-event-edit.component';
import { AdverseEventCreateComponent } from './page/adverse-event-create/adverse-event-create.component';
import { PatientCreateComponent } from './page/patient-create/patient-create.component';
import { PatientEditComponent } from './page/patient-edit/patient-edit.component';
import { PlaceCreateComponent } from './page/place-create/place-create.component';
import { PlaceEditComponent } from './page/place-edit/place-edit.component';
import { VaccinationEditComponent } from './page/vaccination-edit/vaccination-edit.component';
import { VaccinationCreateComponent } from './page/vaccination-create/vaccination-create.component';
import { VaccineCreateComponent } from './page/vaccine-create/vaccine-create.component';
import { VaccineEditComponent } from './page/vaccine-edit/vaccine-edit.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ForbiddenComponent,
    PatientListComponent,
    PlaceListComponent,
    AdverseEventListComponent,
    VaccinationListComponent,
    VaccineListComponent,
    AdverseEventEditComponent,
    AdverseEventCreateComponent,
    PatientCreateComponent,
    PatientEditComponent,
    PlaceCreateComponent,
    PlaceEditComponent,
    VaccinationEditComponent,
    VaccinationCreateComponent,
    VaccineCreateComponent,
    VaccineEditComponent,
    SorterPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
