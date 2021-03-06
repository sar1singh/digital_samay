import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './pages/index.component';

const routes: Routes = [
    { path: '', component: HomeComponent,
    children: [
        { path: 'main', component: IndexComponent},
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
