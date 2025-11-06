import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostHeader from '@/components/BlogPostHeader';
import BlogPostContent from '@/components/BlogPostContent';
import BlogPostCTA from '@/components/BlogPostCTA';
import { blogPostsData } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Статья не найдена</h1>
            <Link to="/blog">
              <Button>Вернуться к блогу</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <BlogPostHeader post={post} />
          <BlogPostContent post={post} />
          <BlogPostCTA />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
