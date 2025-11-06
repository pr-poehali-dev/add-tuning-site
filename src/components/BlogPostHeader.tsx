import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { BlogPostData } from '@/data/blogPosts';

interface BlogPostHeaderProps {
  post: BlogPostData;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <>
      <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Вернуться к блогу
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Icon name="Clock" size={16} />
            {post.readTime}
          </span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Icon name="Calendar" size={16} />
            {new Date(post.date).toLocaleDateString('ru-RU', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
      </div>

      <div className="aspect-video rounded-2xl overflow-hidden mb-8">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default BlogPostHeader;
