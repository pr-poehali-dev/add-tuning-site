import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const projects = [
    {
      brand: 'BMW',
      model: '320d F30',
      year: 2018,
      stage: 'Stage 1',
      powerBefore: 190,
      powerAfter: 245,
      torqueBefore: 400,
      torqueAfter: 500,
      tags: ['Дизель', 'Удаление DPF'],
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/b37c5e9a-92a3-4288-af19-9ac1eb09277c.jpg'
    },
    {
      brand: 'Audi',
      model: 'A4 2.0 TFSI',
      year: 2019,
      stage: 'Stage 2',
      powerBefore: 252,
      powerAfter: 340,
      torqueBefore: 370,
      torqueAfter: 480,
      tags: ['Бензин', 'Турбо'],
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/9ddb80be-3f8d-4f50-85c6-ddc06297a2fb.jpg'
    },
    {
      brand: 'Volkswagen',
      model: 'Golf GTI',
      year: 2020,
      stage: 'Stage 1',
      powerBefore: 245,
      powerAfter: 310,
      torqueBefore: 370,
      torqueAfter: 450,
      tags: ['Бензин', 'DSG'],
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/f2c4ccd1-a251-49b3-a48a-d75310d81881.jpg'
    },
    {
      brand: 'Mercedes',
      model: 'C220d W205',
      year: 2017,
      stage: 'Stage 1',
      powerBefore: 194,
      powerAfter: 250,
      torqueBefore: 400,
      torqueAfter: 520,
      tags: ['Дизель', 'Эко-тюнинг'],
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/b37c5e9a-92a3-4288-af19-9ac1eb09277c.jpg'
    },
    {
      brand: 'Skoda',
      model: 'Octavia RS',
      year: 2021,
      stage: 'Stage 2',
      powerBefore: 245,
      powerAfter: 330,
      torqueBefore: 370,
      torqueAfter: 460,
      tags: ['Бензин', 'Stage 2'],
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/9ddb80be-3f8d-4f50-85c6-ddc06297a2fb.jpg'
    },
    {
      brand: 'Ford',
      model: 'Focus ST',
      year: 2019,
      stage: 'Stage 1',
      powerBefore: 250,
      powerAfter: 300,
      torqueBefore: 360,
      torqueAfter: 440,
      tags: ['Бензин', 'Турбо'],
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/f2c4ccd1-a251-49b3-a48a-d75310d81881.jpg'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Наши работы</h1>
            <p className="text-xl text-muted-foreground">
              Реальные результаты чип-тюнинга автомобилей наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:border-primary transition-all duration-300 animate-scale-in overflow-hidden" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.brand} ${project.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{project.brand}</h3>
                      <p className="text-muted-foreground">{project.model} • {project.year}</p>
                    </div>
                    <Badge className="bg-primary">{project.stage}</Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Мощность</span>
                        <Icon name="TrendingUp" size={16} className="text-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{project.powerBefore} л.с.</span>
                        <Icon name="ArrowRight" size={20} className="text-muted-foreground" />
                        <span className="text-2xl font-bold text-primary">{project.powerAfter} л.с.</span>
                      </div>
                      <div className="text-right text-sm text-primary font-semibold mt-1">
                        +{project.powerAfter - project.powerBefore} л.с. 
                        ({Math.round(((project.powerAfter - project.powerBefore) / project.powerBefore) * 100)}%)
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Крутящий момент</span>
                        <Icon name="Gauge" size={16} className="text-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{project.torqueBefore} Нм</span>
                        <Icon name="ArrowRight" size={20} className="text-muted-foreground" />
                        <span className="text-2xl font-bold text-primary">{project.torqueAfter} Нм</span>
                      </div>
                      <div className="text-right text-sm text-primary font-semibold mt-1">
                        +{project.torqueAfter - project.torqueBefore} Нм
                        ({Math.round(((project.torqueAfter - project.torqueBefore) / project.torqueBefore) * 100)}%)
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto">
              <Icon name="BarChart3" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Хотите такой же результат?</h3>
              <p className="text-muted-foreground mb-6">
                Запишитесь на бесплатную диагностику и получите расчет прироста мощности для вашего автомобиля
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+79372134547" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить нам
                </a>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-foreground rounded-md hover:bg-primary/10 transition-colors font-semibold">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;