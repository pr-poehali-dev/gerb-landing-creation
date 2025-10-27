import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const programData = [
    {
      level: "Для начинающих",
      duration: "3 месяца",
      icon: "Rocket",
      gradient: "from-purple-500 to-pink-500",
      topics: [
        "Английский алфавит и произношение",
        "Базовая грамматика: глаголы to be, to have",
        "Простые времена: Present Simple, Past Simple",
        "Словарный запас для повседневного общения (500+ слов)",
        "Построение простых предложений",
        "Диалоги в магазине, ресторане, отеле"
      ]
    },
    {
      level: "Средний уровень",
      duration: "4 месяца",
      icon: "Award",
      gradient: "from-orange-500 to-blue-500",
      topics: [
        "Все времена английского языка",
        "Условные предложения (Conditionals)",
        "Пассивный залог и косвенная речь",
        "Фразовые глаголы и идиомы",
        "Деловая переписка и презентации",
        "Свободное общение на бытовые и профессиональные темы"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Маркетолог",
      text: "За 3 месяца начала свободно общаться с иностранными коллегами. Юра объясняет сложные темы простым языком!",
      rating: 5,
      avatar: "A"
    },
    {
      name: "Дмитрий Смирнов",
      role: "IT-специалист",
      text: "Курс GERB помог мне пройти собеседование в международную компанию. Программа отлично структурирована!",
      rating: 5,
      avatar: "Д"
    },
    {
      name: "Елена Волкова",
      role: "Студентка",
      text: "Начинала с нуля, теперь смотрю сериалы на английском без субтитров. Результат превзошёл ожидания!",
      rating: 5,
      avatar: "Е"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 animate-gradient bg-[length:200%_200%]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in">
              <Icon name="Sparkles" size={20} />
              <span className="text-sm font-semibold">Курс английского языка GERB</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Заговори на английском<br />
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                за 3-4 месяца
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Практический курс для начинающих и среднего уровня. Индивидуальный подход, современные методики, гарантированный результат
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на курс
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="BookOpen" className="mr-2" size={20} />
                Узнать программу
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-white/80">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm text-white/80">Достигли цели</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.9</div>
                <div className="text-sm text-white/80">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="program" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Программа курса GERB
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите уровень, который соответствует вашим знаниям
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programData.map((program, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${program.gradient}`}></div>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon name={program.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{program.level}</CardTitle>
                  <CardDescription className="text-base flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    Длительность: {program.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="topics">
                      <AccordionTrigger className="text-lg font-semibold">
                        <div className="flex items-center gap-2">
                          <Icon name="List" size={20} />
                          Что вы изучите
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          {program.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className={`mt-1 w-6 h-6 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center flex-shrink-0`}>
                                <Icon name="Check" size={14} className="text-white" />
                              </div>
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Отзывы студентов
            </h2>
            <p className="text-lg text-muted-foreground">
              Что говорят наши выпускники о курсе GERB
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 animate-gradient bg-[length:200%_200%]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-2xl animate-scale-in">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Запишитесь на курс GERB
                </CardTitle>
                <CardDescription className="text-base">
                  Заполните форму, и мы свяжемся с вами для обсуждения деталей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Icon name="User" size={16} />
                        Ваше имя
                      </label>
                      <Input 
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Icon name="Mail" size={16} />
                        Email
                      </label>
                      <Input 
                        required
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Icon name="Phone" size={16} />
                      Телефон
                    </label>
                    <Input 
                      required
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Icon name="MessageSquare" size={16} />
                      Сообщение (опционально)
                    </label>
                    <Textarea 
                      placeholder="Расскажите о вашем уровне английского и целях обучения"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-24"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg h-14 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 text-center text-white">
              <h3 className="text-2xl font-bold mb-6">Контакты</h3>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-white/80">Телефон</div>
                    <div className="font-semibold">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-white/80">Email</div>
                    <div className="font-semibold">info@gerb-english.ru</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 GERB English Course. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
