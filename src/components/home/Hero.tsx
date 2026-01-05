"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[600px] bg-gradient-to-r from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center">

                {/* Text Content */}
                <div className="w-full md:w-1/2 z-10 flex flex-col justify-center space-y-6 pt-10 md:pt-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight font-heading">
                        Sağlığınız İçin <br />
                        <span className="text-action">En İyisi</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg">
                        Modern teknoloji ve uzman kadromuzla, size ve sevdiklerinize dünya standartlarında sağlık hizmeti sunuyoruz.
                    </p>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-md shadow-lg rounded-full overflow-hidden flex bg-white border border-gray-200 group focus-within:ring-2 focus-within:ring-action/50 transition-all">
                        <input
                            type="text"
                            placeholder="Doktor veya Bölüm Arayın..."
                            className="w-full py-4 pl-6 pr-12 text-gray-700 outline-none"
                        />
                        <button className="bg-action hover:bg-action-hover text-white px-6 transition-colors flex items-center justify-center">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button className="bg-action text-white border border-transparent px-8 py-3 rounded-md hover:bg-action-hover shadow-lg shadow-blue-200/50 transition-all transform hover:-translate-y-1 font-medium">
                            Randevu Al
                        </button>
                        <button className="bg-transparent text-primary border border-gray-300 px-8 py-3 rounded-md hover:border-primary hover:bg-gray-50 transition font-medium">
                            Sonuç Sorgula
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hidden md:flex md:w-1/2 h-full items-center justify-center py-10">
                    <div className="relative w-full h-full max-h-[500px] aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-200 border-4 border-white">
                        <Image
                            src="/hero-doctor-2.png"
                            alt="Uzman Doktor"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </section>
    );
}
