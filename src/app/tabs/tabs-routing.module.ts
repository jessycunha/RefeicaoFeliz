import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'offers',
        loadChildren: () => import('../offers/offers.module').then(m => m.OffersPageModule)
      },
      {
        path: 'principal',
        loadChildren: () => import('../principal/principal.module').then(m => m.PrincipalPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
