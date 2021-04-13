import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent}
]

@NgModule({
  declarations: [
    StatFiltersComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
