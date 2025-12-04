import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import type { BlogPost } from '../AdminTypes';

interface BlogTabProps {
  blogPosts: BlogPost[];
  newBlogPost: BlogPost;
  setNewBlogPost: (value: BlogPost) => void;
  addBlogPost: () => void;
  deleteBlogPost: (index: number) => void;
}

const BlogTab = ({
  blogPosts,
  newBlogPost,
  setNewBlogPost,
  addBlogPost,
  deleteBlogPost,
}: BlogTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Добавить статью</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Заголовок"
            value={newBlogPost.title}
            onChange={(e) => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
          />
          <div className="grid grid-cols-3 gap-4">
            <Input
              type="date"
              value={newBlogPost.date}
              onChange={(e) => setNewBlogPost({ ...newBlogPost, date: e.target.value })}
            />
            <Input
              placeholder="5 мин"
              value={newBlogPost.readTime}
              onChange={(e) => setNewBlogPost({ ...newBlogPost, readTime: e.target.value })}
            />
            <select
              className="p-2 border rounded-md"
              value={newBlogPost.category}
              onChange={(e) => setNewBlogPost({ ...newBlogPost, category: e.target.value })}
            >
              <option>Чип-тюнинг</option>
              <option>По маркам</option>
              <option>Советы</option>
            </select>
          </div>
          <Input
            placeholder="URL изображения"
            value={newBlogPost.image}
            onChange={(e) => setNewBlogPost({ ...newBlogPost, image: e.target.value })}
          />
          <Textarea
            placeholder="Краткое описание"
            value={newBlogPost.excerpt}
            onChange={(e) => setNewBlogPost({ ...newBlogPost, excerpt: e.target.value })}
            rows={2}
          />
          <Textarea
            placeholder="Полный текст статьи"
            value={newBlogPost.content}
            onChange={(e) => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
            rows={8}
          />
          <Button onClick={addBlogPost} className="w-full">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить статью
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Статьи блога ({blogPosts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {blogPosts.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Статьи не добавлены</p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {blogPosts.map((post, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {post.category} • {post.date} • {post.readTime}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => deleteBlogPost(index)}>
                      <Icon name="Trash2" size={16} className="text-destructive" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogTab;
