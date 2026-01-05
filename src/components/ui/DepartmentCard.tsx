import {
    ArrowRight,
    HeartPulse,
    Brain,
    Baby,
    Stethoscope,
    Eye,
    Activity,
    Thermometer,
    Cross
} from "lucide-react";

const ICON_MAP = {
    HeartPulse,
    Brain,
    Baby,
    Stethoscope,
    Eye,
    Activity,
    Thermometer,
    Cross
};

interface DepartmentProps {
    name: string;
    iconName: keyof typeof ICON_MAP;
    slug?: string;
}

export default function DepartmentCard({ name, iconName, slug }: DepartmentProps) {
    const href = slug ? `/services/${slug}` : "#";
    const Icon = ICON_MAP[iconName] || Activity;

    return (
        <a href={href} className="group">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-action/20 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-action group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-action transition-colors">{name}</h3>
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center text-action text-sm font-bold">
                    Detaylı Bilgi <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        </a>
    );
}
