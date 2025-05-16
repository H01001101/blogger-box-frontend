import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../data/category';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css'],
    standalone: false
})
export class AddPostComponent implements OnInit {
    postForm: FormGroup;
    categories: Category[] = [];

    constructor(
        private fb: FormBuilder,
        private postService: PostService,
        private categoryService: CategoryService,
        private router: Router
    ) {
        this.postForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
            category: ['', Validators.required],
            content: ['', [Validators.required, Validators.maxLength(2500)]]
        });
    }

    ngOnInit(): void {
        this.categoryService.getAll().subscribe(categories => {
            console.log('Catégories récupérées:', categories);
            this.categories = categories;
        });
    }

    onSubmit(): void {
        if (this.postForm.invalid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please review your post!',
            });
            return;
        }

        const formValue = this.postForm.value;

        const selectedCategory = this.categories.find(cat => cat.id === formValue.category);

        if (!selectedCategory) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid category selected!',
            });
            return;
        }

        const now = new Date();
        const createdDate = now.getFullYear() +
          '-' + String(now.getMonth() + 1).padStart(2, '0') +
          '-' + String(now.getDate()).padStart(2, '0') +
          'T' + String(now.getHours()).padStart(2, '0') +
          ':' + String(now.getMinutes()).padStart(2, '0') +
          ':' + String(now.getSeconds()).padStart(2, '0');

        console.log(createdDate);

        const payload = {
            title: formValue.title,
            content: formValue.content,
            createdDate: createdDate,
            categoryTitle: selectedCategory.title,
        };

        console.log("Données envoyées au backend:", payload);

        this.postService.create(payload).subscribe(() => {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Post Submitted Successfully!',
            });
            this.router.navigate(['/home']);
        });
    }

}
