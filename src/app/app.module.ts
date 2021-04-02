import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhonePipe, SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimationComponent } from './components/animation/animation.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { IntroductionComponent } from './components/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    PhonePipe,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AnimationComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
