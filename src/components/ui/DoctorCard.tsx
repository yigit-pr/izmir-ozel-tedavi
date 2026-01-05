import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface DoctorProps {
    name: string;
    specialty: string;
    image: string;
}

export default function DoctorCard({ name, specialty, image }: DoctorProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
            <div className="relative w-full h-72 bg-gray-100">
                <Image
                    src={image || "/hero-doctor-2.png"}
                    alt={name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-primary font-heading mb-1">{name}</h3>
                <p className="text-action text-sm font-semibold mb-4 uppercase tracking-wider">{specialty}</p>
                <Link href="#" className="inline-flex items-center text-gray-400 group-hover:text-action text-sm font-bold transition-colors">
                    Profil Detayı <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
