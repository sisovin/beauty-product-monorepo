import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent }
];
