import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './src/app/auth/auth.guard';
import { PostCreateComponent } from './src/app/posts/post-create/post-create.component';
import { PostListComponent } from './src/app/posts/post-list/post-list.component';

const routes: Routes = [
    { path: '', component: PostListComponent},
    { path: 'create', component: PostCreateComponent, canActivate: [authGuard]},
    { path: 'edit/:postId', component: PostCreateComponent, canActivate: [authGuard]},
    { path: 'auth', loadChildren: () => import('./src/app/auth/auth.module').then(m => m.AuthModule)}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}