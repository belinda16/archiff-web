import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { VerifiedComponent } from './pages/verified/verified.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesSectionComponent } from './pages/shop/components/categories-section/categories-section.component';
import { CategoryselectedComponent } from './pages/categoryselected/categoryselected.component';
import { FilteredProductPageComponent } from './pages/filtered-product/filtered-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, pathMatch: 'full' },
    {path:'shop', component: ShopComponent},
    { 
        path:'sell',
        component: SellerDashboardComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'offers', component: OffersComponent},
            { path: 'products', component: ProductsComponent} 
        ]
    },
    { path:'login',component:LoginComponent},
    { path:'register',component:RegisterComponent},
    { path:'verify',component:VerificationComponent},
    { path:'verified',component:VerifiedComponent},
    { path:'profile',component:ProfileComponent},
    { path:'shop/:category',component:CategoryselectedComponent},
    { path:'filtered-product',component:FilteredProductPageComponent},
    { path:'product-details',component:ProductDetailsComponent},
    { path:'checkout',component:CheckoutComponent}
];
