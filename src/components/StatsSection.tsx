const StatsSection = () => {
  const stats = [
    { number: '1300+', label: 'Автомобилей прошито' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '7', label: 'Лет опыта' },
    { number: '50+', label: 'Марок авто' },
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
