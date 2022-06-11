import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { DisplayComponent } from './display/display.component';
import { CarouselComponent } from './carousel/carousel.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'display', component: DisplayComponent},
  {path: 'carousel', component: CarouselComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProjectComponent,
    DisplayComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    ),
    NgxNavbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
