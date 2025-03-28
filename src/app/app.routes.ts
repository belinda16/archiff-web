import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerificationComponent } from './pages/verification/verification.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, pathMatch: 'full' },
    {path:'buy', component: ShopComponent},
    { path: 'dashboard', component: SellerDashboardComponent },
    { path: 'login',component:LoginComponent},
    { path: 'register',component:RegisterComponent},
    { path: 'verify',component:VerificationComponent}
];
