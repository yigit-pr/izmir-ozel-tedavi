"use client";

import Hero from "@/components/home/Hero";
import DepartmentCard from "@/components/ui/DepartmentCard";
import DoctorCard from "@/components/ui/DoctorCard";
import {
  HeartPulse, Brain, Baby, Stethoscope, Eye,
  Activity, Thermometer, Cross, Award, Users, Bed,
  ArrowRight, Phone
} from "lucide-react";

export default function Home() {
  const departments = [
    { name: "Kardiyoloji", icon: <HeartPulse className="w-8 h-8" /> },
    { name: "Nöroloji", icon: <Brain className="w-8 h-8" /> },
    { name: "Çocuk Sağlığı", icon: <Baby className="w-8 h-8" /> },
    { name: "Genel Cerrahi", icon: <Stethoscope className="w-8 h-8" /> },
    { name: "Göz Hastalıkları", icon: <Eye className="w-8 h-8" /> },
    { name: "Ortopedi", icon: <Activity className="w-8 h-8" /> },
    { name: "Dahiliye", icon: <Thermometer className="w-8 h-8" /> },
    { name: "Acil Tıp", icon: <Cross className="w-8 h-8" /> },
  ];

  const doctors = [
    { name: "Prof. Dr. Ayşe Yılmaz", specialty: "Kardiyoloji Uzmanı", image: "/hero-doctor-2.png" },
    { name: "Op. Dr. Mehmet Demir", specialty: "Genel Cerrahi", image: "/hero-doctor-2.png" },
    { name: "Doç. Dr. Zeynep Kaya", specialty: "Nöroloji", image: "/hero-doctor-2.png" },
    { name: "Uzm. Dr. Ali Çelik", specialty: "Çocuk Sağlığı", image: "/hero-doctor-2.png" },
  ];

  return (
    <main>
      <Hero />

      {/* Medical Units Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-action font-bold tracking-widest uppercase text-xs">Tıbbi Birimlerimiz</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 font-heading uppercase tracking-tight">Uzmanlık Alanlarımız</h2>
            <div className="w-24 h-1.5 bg-action mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
              Hastanemiz, en son teknoloji ile donatılmış birimlerinde, alanında uzman hekim kadrosuyla hizmet vermektedir.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, idx) => (
              <DepartmentCard
                key={idx}
                name={dept.name}
                icon={dept.icon}
                slug={dept.name.toLowerCase().replace(/ /g, "-").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services / High Tech Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 z-10">
              <span className="text-action font-bold tracking-widest uppercase text-xs">İzmir Özel Tedavi Farkı</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 font-heading leading-tight uppercase">
                Modern Teknoloji <br />
                <span className="text-action underline decoration-sky-100 decoration-8 underline-offset-4">Geleceğin Sağlığı</span>
              </h2>
              <p className="text-gray-600 mt-8 text-lg leading-relaxed">
                Hastanemiz, uluslararası kalite standartlarında hizmet sunmakta olup, hasta güvenliği ve memnuniyetini en üst düzeyde tutmaktadır. İleri tanı ve tedavi yöntemlerimiz ile sağlığınız emin ellerde.
              </p>

              <ul className="mt-10 space-y-5">
                {[
                  { icon: <Activity />, text: "7/24 Kesintisiz Acil Servis & Ambulans" },
                  { icon: <Award />, text: "JCI Akreditasyonlu Kalite Güvencesi" },
                  { icon: <Users />, text: "Kişiye Özel Hasta Odaklı Bakım" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-action/20 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-action group-hover:bg-action group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-primary text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 h-[600px] bg-primary rounded-[40px] relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-action opacity-95">
                <div className="h-full flex flex-col items-center justify-center text-white text-center p-12 relative z-10">
                  <div className="w-20 h-20 bg-action/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
                    <Bed className="w-10 h-10 text-action" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading mb-6 uppercase tracking-tight">Kapasite & Teknoloji</h3>
                  <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl font-bold text-action">150+</div>
                      <div className="text-xs uppercase tracking-widest font-bold opacity-70">Yatak</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl font-bold text-action">8</div>
                      <div className="text-xs uppercase tracking-widest font-bold opacity-70">Ameliyathane</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm col-span-2">
                      <div className="text-3xl font-bold text-action">30.000 m²</div>
                      <div className="text-xs uppercase tracking-widest font-bold opacity-70">Kapalı Alan</div>
                    </div>
                  </div>
                </div>
                {/* Visual texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-action font-bold tracking-widest uppercase text-xs">Profesyonel Kadromuz</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 font-heading uppercase">Hekimlerimiz</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-action font-bold hover:underline group">
              Tüm Hekimler <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, idx) => (
              <DoctorCard key={idx} {...doc} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <button className="w-full bg-white text-action border-2 border-action px-8 py-4 rounded-xl hover:bg-action hover:text-white transition-all font-bold">
              Tüm Hekimlerimizi Gör
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Stats */}
      <section className="py-20 bg-primary text-white border-y border-primary-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Yıllık Tecrübe", val: "25+" },
              { label: "Uzman Hekim", val: "150+" },
              { label: "Mutlu Hasta", val: "300K+" },
              { label: "Acil Servis", val: "7/24" }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-5xl md:text-6xl font-bold mb-3 font-heading text-action group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                <div className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-action/5 z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading uppercase tracking-tight">Sağlıklı Gelecek İçin <br /> <span className="text-action">Şimdi Randevu Alın</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            E-Randevu sistemimizi kullanarak dilediğiniz poliklinik ve hekimden saniyeler içinde randevu oluşturabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto bg-action hover:bg-action-hover text-white px-10 py-5 rounded-xl text-xl font-bold transition-all shadow-xl shadow-sky-500/20 transform hover:-translate-y-1">
              Online Randevu Sistemi
            </button>
            <button className="w-full sm:w-auto bg-primary-light border border-slate-700 hover:border-action text-white px-10 py-5 rounded-xl text-xl font-bold transition-all flex items-center justify-center gap-3 group">
              <Phone className="w-6 h-6 text-action group-hover:animate-bounce" /> 444 0 444
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
