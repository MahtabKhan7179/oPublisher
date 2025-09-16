import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { RegistrationComponent } from './pages/registeration/registeration';
import { HomeComponent } from './pages/home/home';
import { CreateArticleComponent } from './pages/create-article/create-article';
import { articleDetailsComponent } from './pages/article-details/article-details';
import { ArticlesComponent } from './pages/articles/articles';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'createArticle', component: CreateArticleComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent},
  { path: 'article/:id', component: articleDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
