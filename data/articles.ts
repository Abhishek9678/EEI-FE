export interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    author: string;
    category: string;
}
export const articles = [
  {
    id: 1,
    title: "Article 1",
    content: "Content 1",
    image: "/images/article1.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Author 1",
    category: "Category 1",
  },
  {
    id: 2,
    title: "Article 2",
    content: "Content 2",
    image: "/images/article2.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Author 2",
    category: "Category 2",
  },
  {
    id: 3,
    title: "Article 3",
    content: "Content 3",
    image: "/images/article3.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Author 3",
    category: "Category 3",
  },
  {
    id: 4,
    title: "Article 4",
    content: "Content 4",
    image: "/images/article4.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Author 4",
    category: "Category 4",
  },
  {
    id: 5,
    title: "Article 5",
    content: "Content 5",
    image: "/images/article5.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Author 5",
    category: "Category 5",
  },
  {
    id: 6,
    title: "Article 6",
    content: "Content 6",
    image: "/images/article6.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Author 6",
    category: "Category 6",
  }
]
   