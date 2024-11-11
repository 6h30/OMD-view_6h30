// src/types/api_project.ts

// Định nghĩa type cho phần SEO
export interface SEO {
    metaTitle: string;
    metaDescription: string;
    metaImage: string;
    keywords: string;
    metaRobots: string;
    structuredData: Record<string, unknown>; // Dữ liệu có thể là object phức tạp, sử dụng Record
    canonicalURL: string;
}

// Định nghĩa type cho phần Customer
export interface Customer {
    customer_id: number;
    name: string;
}

// Định nghĩa type cho Project
export interface Project {
    project_id: number;
    title: string;
    slug: string;
    completion_year: number;
    summary: string;
    location: string;
    image_url: string;
    seo: SEO;
    architect: string | null; // Cho phép giá trị null
    customer: Customer;
    createdAt: string; // ISO 8601 datetime string
    updatedAt: string; // ISO 8601 datetime string
}

