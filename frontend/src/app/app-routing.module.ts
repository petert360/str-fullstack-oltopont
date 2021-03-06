import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { AdverseEventCreateComponent } from './page/adverse-event-create/adverse-event-create.component';
import { AdverseEventEditComponent } from './page/adverse-event-edit/adverse-event-edit.component';
import { AdverseEventListComponent } from './page/adverse-event-list/adverse-event-list.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PatientCreateComponent } from './page/patient-create/patient-create.component';
import { PatientEditComponent } from './page/patient-edit/patient-edit.component';
import { PatientListComponent } from './page/patient-list/patient-list.component';
import { PlaceCreateComponent } from './page/place-create/place-create.component';
import { PlaceEditComponent } from './page/place-edit/place-edit.component';
import { PlaceListComponent } from './page/place-list/place-list.component';
import { VaccinationCreateComponent } from './page/vaccination-create/vaccination-create.component';
import { VaccinationEditComponent } from './page/vaccination-edit/vaccination-edit.component';
import { VaccinationListComponent } from './page/vaccination-list/vaccination-list.component';
import { VaccineCreateComponent } from './page/vaccine-create/vaccine-create.component';
import { VaccineEditComponent } from './page/vaccine-edit/vaccine-edit.component';
import { VaccineListComponent } from './page/vaccine-list/vaccine-list.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RoleGuardService } from './service/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'patients',
    component: PatientListComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1,
    }
  },
  {
    path: 'patient/create',
    component: PatientCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1,
    }
  },
  {
    path: 'patient/edit/:id',
    component: PatientEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1,
    }
  },
  {
    path: 'vaccines',
    component: VaccineListComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'vaccine/create',
    component: VaccineCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'vaccine/edit/:id',
    component: VaccineEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },

  {
    path: 'places',
    component: PlaceListComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'place/create',
    component: PlaceCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'place/edit/:id',
    component: PlaceEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'adverse-events',
    component: AdverseEventListComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'adverse-event/create',
    component: AdverseEventCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'adverse-event/edit/:id',
    component: AdverseEventEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'vaccinations',
    component: VaccinationListComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'vaccination/create',
    component: VaccinationCreateComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'vaccination/edit/:id',
    component: VaccinationEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },

  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
