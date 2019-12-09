import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BsDropdownModule, AccordionModule, BsDatepickerModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TopoComponent } from './topo/topo.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { DashboardUltimasComponent } from './dashboard/dashboard-ultimas/dashboard-ultimas.component';
import { DashboardAutoresComponent } from './dashboard/dashboard-autores/dashboard-autores.component';
import { DashboardComentariosComponent } from './dashboard/dashboard-comentarios/dashboard-comentarios.component';
import { DashboardNovidadesComponent } from './dashboard/dashboard-novidades/dashboard-novidades.component';
import { AtalhoPerfilComponent } from './topo/atalho-perfil/atalho-perfil.component';
import { ConfgMenuComponent } from './topo/confg-menu/confg-menu.component';
import { RankNoticiasComponent } from './include-parts/blocos/listagem/rank-noticias/rank-noticias.component';
import { ListagemComponent } from './include-parts/blocos/listagem/listagem.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HomeComponent } from './home/home.component';
import { PadraoComponent } from './layouts/padrao/padrao.component';
import { FormComponent } from './layouts/form/form.component';
import { TopomenorComponent } from './topo/topomenor/topomenor.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormDebugComponent } from './formulario/form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    MenuComponent,
    DashboardComponent,
    CardsComponent,
    DashboardUltimasComponent,
    DashboardAutoresComponent,
    DashboardComentariosComponent,
    DashboardNovidadesComponent,
    AtalhoPerfilComponent,
    ConfgMenuComponent,
    RankNoticiasComponent,
    ListagemComponent,
    NoticiasComponent,
    HomeComponent,
    PadraoComponent,
    FormComponent,
    TopomenorComponent,
    FormularioComponent,
    FormDebugComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
