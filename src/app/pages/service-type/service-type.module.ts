import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ServiceTypeRoutingModule } from './service-type-routing.module';
import { ServiceTypeComponent } from './service-type.component';
import { CreateComponent } from './create/create.component';
// import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
// import { StepperComponent } from './stepper/stepper.component';
// import { ListComponent } from './list/list.component';
// import { InfiniteListComponent } from './infinite-list/infinite-list.component';
// import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
// import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
// import { AccordionComponent } from './accordion/accordion.component';
// import { NewsService } from './news.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    ServiceTypeRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ServiceTypeComponent,
    CreateComponent,
    // TabsComponent,
    // Tab1Component,
    // Tab2Component,
    // StepperComponent,
    // ListComponent,
    // NewsPostPlaceholderComponent,
    // InfiniteListComponent,
    // NewsPostComponent,
    // AccordionComponent,
  ],
  providers: [
    // NewsService,
  ],
})
export class ServiceTypeModule { }
