const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Раскройте
              <span className="block text-primary">потенциал</span>
              вашего авто
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональный чип-тюнинг вашего автомобиля. Увеличение мощности до 50% с индивидуальным подходом и гарантией качества.
            </p>
          </div>
          <div className="relative animate-slide-right">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/fccdfcea-9025-4179-ab3c-491b2c485eb0.jpg" 
                alt="Профессиональный чип-тюнинг автомобилей в Тольятти - ADD Tuning"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
