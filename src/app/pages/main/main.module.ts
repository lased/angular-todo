import { NgModule } from '@angular/core';

import { ComponentsModule } from '@app/components/components.module';
import { DbService } from '@app/services/db.service';
import { TaskService } from '@app/services/task.service';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [MainRoutingModule, ComponentsModule],
  providers: [TaskService, DbService],
})
export class MainModule {}
