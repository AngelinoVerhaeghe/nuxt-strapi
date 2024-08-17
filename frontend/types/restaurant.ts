import type { Category } from "~/types/category";

interface CategoryDataWrapper {
    data: Category[];
}

export interface Restaurant {
    id: number;
    attributes: {
        name: string;
        description: Description[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        categories: CategoryDataWrapper;
    };
}

interface DescriptionChild {
    type: string;
    text: string;
}

interface Description {
    type: string;
    children: DescriptionChild[];
}
