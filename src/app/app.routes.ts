import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { VerificationComponent } from './pages/auth/verification/verification.component';
import { VerifiedComponent } from './pages/auth/verified/verified.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryselectedComponent } from './pages/categoryselected/categoryselected.component';
import { FilteredProductPageComponent } from './pages/filtered-product/filtered-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { BusinessOnboardingComponent } from './pages/business-onboarding/business-onboarding.component';
import { LoginSellerCodeComponent } from './pages/auth/seller-code/seller-code.component';
import { SellerCodeComponent } from './pages/seller-code/seller-code.component';
import { OtpGuard } from './pages/auth/verification/guard/verify.guard';
import { NotFoundComponent } from './pages/404/404.component';
import { ResetPassword } from './pages/auth/reset-password/components/reset-password.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, pathMatch: 'full' },
    {path:'shop', component: FilteredProductPageComponent},
    {path:'category',component:ShopComponent},
    { 
        path:'sell',
        component: LoginSellerCodeComponent,
    },
    {
        path:"seller",
        component:SellerDashboardComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'offers', component: OffersComponent},
            { path: 'products', component: ProductsComponent} 
        ]
    },
    { path:'login',component:LoginComponent},
    { path:'register',component:RegisterComponent},
    { path:'verify',component:VerificationComponent},
    { path:'reset-password',component:ResetPassword},
    { path:'profile',component:ProfileComponent},
    { path:'shop/:category',component:CategoryselectedComponent},
    { path:'filtered-product',component:FilteredProductPageComponent},
    { path:'product-details',component:ProductDetailsComponent},
    { path:'checkout',component:CheckoutComponent},
    { path:'onboarding',component:SellerCodeComponent},
    { path:'individual-onboarding',component:OnboardingComponent},
    { path:'business-onboarding',component:BusinessOnboardingComponent},
    { path:'**',component:NotFoundComponent}
];
