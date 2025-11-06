import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { BlogPostData } from '@/data/blogPosts';

interface BlogPostContentProps {
  post: BlogPostData;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        {post.content.intro}
      </p>

      {post.content.sections.map((section, index) => (
        <Card key={index} className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                {index + 1}
              </span>
              {section.title}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {section.content}
            </p>
            {section.list && (
              <ul className="space-y-2">
                {section.list.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      ))}

      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 mt-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Icon name="Lightbulb" size={24} className="text-primary mt-1 flex-shrink-0" />
            <p className="text-foreground leading-relaxed">
              <strong>Итог:</strong> {post.content.conclusion}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPostContent;
