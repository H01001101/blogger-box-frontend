import { Category } from "./category";

export interface Post {
    id: string;
    title: string;
    content: string;
    createdDate: Date;
    category: Category;
}

export const POSTS: Post[] = [
    {
        id: '1',
        title: 'My first amazing title',
        content: 'My first amazing content post',
        createdDate: new Date('2024-05-01'),
        category: { id: '1', title: 'Adoption' }
    },
    {
        id: '2',
        title: 'The Transformative Power of Foster Care Adoption',
        content: 'Foster care adoption provides permanent homes for children...',
        createdDate: new Date('2024-05-02'),
        category: { id: '2', title: 'Adoption' }
    },
];
