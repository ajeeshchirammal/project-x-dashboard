import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryTypeComponent } from './category-type.component';
import { CreateComponent } from './create/create.component';
// import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
// import { AccordionComponent } from './accordion/accordion.component';
// import { InfiniteListComponent } from './infinite-list/infinite-list.component';
// import { ListComponent } from './list/list.component';
// import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [{
  path: '',
  component: CategoryTypeComponent,
  children: [
    {
      path: 'create',
      component: CreateComponent,
    },
    // {
    //   path: 'list',
    //   component: ListComponent,
    // },
    // {
    //   path: 'infinite-list',
    //   component: InfiniteListComponent,
    // },
    // {
    //   path: 'accordion',
    //   component: AccordionComponent,
    // },
    // {
    //   path: 'tabs',
    //   component: TabsComponent,
    //   children: [
    //     {
    //       path: '',
    //       redirectTo: 'tab1',
    //       pathMatch: 'full',
    //     },
    //     {
    //       path: 'tab1',
    //       component: Tab1Component,
    //     },
    //     {
    //       path: 'tab2',
    //       component: Tab2Component,
    //     },
    //   ],
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryTypeRoutingModule {
}
