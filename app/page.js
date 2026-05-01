import { CheckCircle2, Globe2, GraduationCap, Headphones, Sparkles, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';

const features = [
  {
    icon: GraduationCap,
    title: 'Lộ trình học cá nhân hóa',
    description: 'Đánh giá trình độ ban đầu và xây dựng kế hoạch luyện nghe, nói, đọc, viết phù hợp với mục tiêu của bạn.',
  },
  {
    icon: Headphones,
    title: 'Bài học tương tác mỗi ngày',
    description: 'Học qua hội thoại thực tế, audio chuẩn bản ngữ và bài tập phản xạ giúp ghi nhớ tự nhiên.',
  },
  {
    icon: Globe2,
    title: 'Tập trung giao tiếp thực tế',
    description: 'Nội dung học dành cho công việc, du lịch và cuộc sống hàng ngày để bạn tự tin sử dụng ngay.',
  },
];

const stats = [
  { value: '50K+', label: 'Học viên đang theo học' },
  { value: '1.2M+', label: 'Bài luyện hoàn thành' },
  { value: '4.9/5', label: 'Đánh giá trải nghiệm' },
];

const highlights = [
  'Học 15 phút/ngày nhưng tiến bộ rõ rệt.',
  'Có cố vấn học tập theo dõi hàng tuần.',
  'Báo cáo tiến độ trực quan, dễ theo dõi.',
  'Học trên mọi thiết bị, mọi lúc mọi nơi.',
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero__badge">
          <Sparkles size={16} />
          Nền tảng học tiếng Anh hiện đại
        </div>
        <h1>Học tiếng Anh chuyên nghiệp để bứt phá sự nghiệp</h1>
        <p>
          English Learning Hub giúp bạn xây dựng nền tảng vững chắc và tự tin giao tiếp chỉ với lộ trình thông minh,
          bài học thực tiễn và hệ thống theo dõi tiến độ rõ ràng.
        </p>
        <div className="hero__actions">
          <Button type="button" size="lg">Bắt đầu học thử miễn phí</Button>
          <Button type="button" variant="secondary" size="lg">Xem lộ trình mẫu</Button>
        </div>
      </section>

      <section className="stats" aria-label="Thống kê nổi bật">
        {stats.map((stat) => (
          <article key={stat.label} className="stats__card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="features" aria-labelledby="features-title">
        <h2 id="features-title">Vì sao học viên chọn English Learning Hub?</h2>
        <div className="features__grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="feature-card">
                <Icon size={22} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="highlight" aria-labelledby="highlight-title">
        <div>
          <h2 id="highlight-title">Lộ trình rõ ràng, kết quả đo lường được</h2>
          <p>
            Từ người mới bắt đầu đến người đi làm muốn nâng cao giao tiếp, nền tảng sẽ gợi ý nội dung phù hợp và nhắc
            học đều đặn để bạn duy trì động lực mỗi ngày.
          </p>
        </div>
        <ul>
          {highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonial" aria-labelledby="testimonial-title">
        <Users size={24} />
        <h2 id="testimonial-title">“Sau 8 tuần, mình đã tự tin thuyết trình bằng tiếng Anh trước khách hàng quốc tế.”</h2>
        <p>— Minh Anh, Marketing Executive</p>
      </section>
    </main>
  );
}
