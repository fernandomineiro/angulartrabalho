import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadraoComponent } from './layouts/padrao/padrao.component';
import { FormComponent } from './layouts/form/form.component';

import { FormularioComponent } from './formulario/formulario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticiasComponent } from './noticias/noticias.component';

const ROTAS: Routes = [
    {
        path: '',
        component: PadraoComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'noticias',
                component: NoticiasComponent
            }
        ]
    },
    {
        path: '',
        component: FormComponent,
        children: [
            {
                path: 'novanotica',
                component: FormularioComponent
            }
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROTAS);