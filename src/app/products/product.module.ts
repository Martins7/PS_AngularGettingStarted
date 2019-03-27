import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.components';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpacesPipe } from '../shared/ConvertToSpacesPipe';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent  },
      { path: 'products/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductListComponent
       },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
