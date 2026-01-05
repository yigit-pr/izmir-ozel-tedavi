"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Phone, User, FileText, Building2 } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const medicalUnits = [
        "Dahiliye", "Kardiyoloji", "Nöroloji", "Ortopedi",
        "Çocuk Sağlığı", "Kadın Hastalıkları", "Genel Cerrahi", "Göz Hastalıkları",
        "Kulak Burun Boğaz", "Dermatoloji", "Fizik Tedavi", "Üroloji"
    ];

    return (
        <header className="w-full relative z-50 shadow-sm font-sans">
            {/* Top Bar - Quick Access */}
            <div className="bg-primary text-white py-2 text-sm border-b border-primary-light">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-2 text-gray-300">
                            <Phone className="w-4 h-4 text-action" /> 444 0 444
                        </span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link href="tel:4440444" className="bg-accent hover:bg-red-600 text-white px-4 py-1 rounded-sm font-bold animate-pulse transition-colors flex items-center gap-1 shadow-lg shadow-red-500/20">
                            ACİL: 444 0 444
                        </Link>
                        <Link href="#" className="hover:text-action transition-colors flex items-center gap-1 text-gray-300 hidden sm:flex">
                            <Building2 className="w-4 h-4 text-action" /> Anlaşmalı Kurumlar
                        </Link>
                        <Link href="#" className="hover:text-action transition-colors flex items-center gap-1 text-gray-300 hidden sm:flex">
                            <FileText className="w-4 h-4 text-action" /> E-Sonuç
                        </Link>
                        <Link href="#" className="bg-action hover:bg-action-hover text-white px-4 py-1 rounded-sm font-medium transition-colors flex items-center gap-1 shadow-md shadow-sky-500/20">
                            <User className="w-4 h-4" /> E-Randevu
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white py-4 shadow-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary group-hover:bg-action transition-colors rounded-lg flex items-center justify-center text-white font-bold text-xl">İ</div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-primary leading-none tracking-tight font-heading group-hover:text-action transition-colors">İZMİR</span>
                            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase italic">ÖZEL TEDAVİ</span>
                        </div>

                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#" className="text-primary hover:text-action font-medium transition-colors">
                            Kurumsal
                        </Link>

                        {/* Mega Menu Trigger */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsMegaMenuOpen(true)}
                            onMouseLeave={() => setIsMegaMenuOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-primary hover:text-action font-medium transition-colors py-2"
                            >
                                Tıbbi Birimler <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Mega Menu Dropdown */}
                            {isMegaMenuOpen && (
                                <div className="absolute top-full left-0 w-[600px] -ml-20 bg-white shadow-xl border-t-4 border-action p-6 grid grid-cols-3 gap-4 rounded-b-lg animate-in fade-in slide-in-from-top-2 duration-200">
                                    {medicalUnits.map((unit, index) => (
                                        <Link
                                            key={index}
                                            href={`/services/${unit.toLowerCase().replace(/ /g, "-")}`}
                                            className="text-gray-600 hover:text-action hover:bg-sky-50 p-2 rounded block text-sm transition-colors"
                                        >
                                            {unit}
                                        </Link>
                                    ))}
                                    <Link href="#" className="col-span-3 text-center text-action font-bold text-sm mt-2 border-t pt-3 hover:underline">
                                        Tüm Birimleri Gör &rarr;
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="#" className="text-primary hover:text-action font-medium transition-colors">
                            Hekimlerimiz
                        </Link>
                        <Link href="#" className="text-primary hover:text-action font-medium transition-colors">
                            Check-Up
                        </Link>
                        <Link href="#" className="text-primary hover:text-action font-medium transition-colors">
                            İletişim
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t absolute w-full left-0 shadow-lg z-50">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link href="#" className="text-primary font-medium border-b pb-2">Kurumsal</Link>
                        <div className="border-b pb-2">
                            <span className="font-medium text-primary block mb-2">Tıbbi Birimler</span>
                            <div className="grid grid-cols-2 gap-2 pl-2">
                                {medicalUnits.slice(0, 6).map((unit, i) => (
                                    <Link key={i} href="#" className="text-sm text-gray-600 hover:text-action">{unit}</Link>
                                ))}
                            </div>
                        </div>
                        <Link href="#" className="text-primary font-medium border-b pb-2">Hekimlerimiz</Link>
                        <Link href="#" className="text-primary font-medium border-b pb-2">İletişim</Link>
                        <Link href="#" className="bg-action text-white text-center py-2 rounded">E-Randevu Al</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
