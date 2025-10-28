import { articles as articlesData, Article } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export default function AdvertisePage() {
 
  const articles: Article[] = articlesData;
  if (!articles) {
    return <div>Articles not found</div>;
  }


  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold">Advertise</h1>
        <p className="mt-2 text-gray-600 leading-relaxed">
          Promote your brand on EV fleets and reach high-intent customers across the city.
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link 
              href={`/advertise/${article.id}`}
              className="block h-full border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-2px]"
            >
              <div className="relative h-48">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
                <p className="text-gray-600 mt-2 line-clamp-3">{article.content}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>By {article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
         
        </div>
      </div>
    </main>
  )
}
