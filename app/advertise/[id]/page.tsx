import { notFound } from 'next/navigation';
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find(article => article.id.toString() === params.id);

  if (!article) {
    notFound();
  }

  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/advertise" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          ← Back to Articles
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="text-blue-600 font-medium">{article.category}</span>
              <span className="mx-2">•</span>
              <time dateTime={article.createdAt.toISOString()}>
                {new Date(article.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="mx-2">•</span>
              <span>By {article.author}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            
            <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
              <p>{article.content}</p>
              {/* Add more content sections here as needed */}
              <p className="mt-4">
                This is additional content for the article. In a real application,
                this would be the full article content loaded from your data source.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

// Generate static paths for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}
