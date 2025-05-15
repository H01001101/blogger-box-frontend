import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { PostService } from './services/post.service';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        PostListComponent,
        PostListItemComponent,
        AddPostComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
    ],
    providers: [
        provideHttpClient(),
        PostService,
        CategoryService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
