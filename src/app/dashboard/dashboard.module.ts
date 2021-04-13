import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';



@NgModule({
  declarations: [
    StatFiltersComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
