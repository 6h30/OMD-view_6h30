// src/types/api_post.ts

export interface SEO {
    title: string;
    description: string;
}

export interface StructuredData {
    "@context": string;
    "@type": string;
    headline: string;
}

export interface Post {
    post_id: number;
    seo: SEO;
    metaTitle: string;
    metaDescription: string;
    metaImage: string;
    keywords: string;
    metaRobots: string;
    structuredData: StructuredData;
    metaViewport: string;
    canonicalURL: string;
    title: string;
    description: string;
    slug: string;
    content: string;
    image: string;
    author_id: number;
    createdAt: string;
    updatedAt: string;
}
