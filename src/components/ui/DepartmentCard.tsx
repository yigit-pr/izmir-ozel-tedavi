import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DepartmentProps {
    name: string;
    icon: React.ReactNode;
    slug?: string;
}

export default function DepartmentCard({ name, icon, slug }: DepartmentProps) {
    const href = slug ? `/services/${slug}` : "#";

    return (
        <Link href={href} className="group">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-action/20 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-action group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-action transition-colors">{name}</h3>
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center text-action text-sm font-bold">
                    Detaylı Bilgi <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        </Link>
    );
}
