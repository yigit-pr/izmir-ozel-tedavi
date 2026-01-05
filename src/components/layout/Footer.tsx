// Replaced next/link with a for Astro

import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-action rounded flex items-center justify-center text-white font-bold text-xl">İ</div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none tracking-tight font-heading">İZMİR</span>
                                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase italic">ÖZEL TEDAVİ</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Sağlığınız bizim için en değerli emanet. Modern tıp teknolojisi ve uzman hekim kadromuzla yanınızdayız.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-action transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-action transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-action transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-action transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                        <div className="pt-6">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Akreditasyonlarımız</p>
                            <div className="flex gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-center">JCI</div>
                                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-center">ISO 9001</div>
                                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-center">TÜSKA</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick as */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading text-white">Hızlı Erişim</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-action transition-colors">Hakkımızda</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Hekimlerimiz</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Kalite Politikamız</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Anlaşmalı Kurumlar</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Kişisel Verilerin Korunması</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Bilgi Toplumu Hizmetleri</a></li>
                        </ul>
                    </div>

                    {/* Departments */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading text-white">Tıbbi Birimler</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-action transition-colors">Acil Servis</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Ağız ve Diş Sağlığı</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Beslenme ve Diyet</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Beyin ve Sinir Cerrahisi</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Check-Up Merkezi</a></li>
                            <li><a href="#" className="hover:text-action transition-colors">Çocuk Sağlığı ve Hastalıkları</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading text-white">İletişim</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-action shrink-0 mt-0.5" />
                                <span>Gazi Mahallesi, Şifa Sokak No: 1, <br /> Çankaya / Ankara</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-action shrink-0" />
                                <span>444 0 444</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-action shrink-0" />
                                <span>iletisim@gazihastanesi.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">© 2026 İzmir Özel Tedavi. Tüm hakları saklıdır.</p>
                    <div className="flex space-x-6 text-xs text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
                        <a href="#" className="hover:text-white transition-colors">Site Haritası</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
