import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    actionText?: string;
    onAction?: () => void;
}

export default function ServiceCard(
    {
        title,
        description,
        icon,
        actionText = "Learn More",
        onAction,
    }: ServiceCardProps) {
    return (
        <div
            className="
        group relative
        bg-[#30364F]
        border border-white/10
        rounded-2xl
        p-6
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl hover:shadow-black/40
      "
        >
            {/* Icon */}
            <div className="mb-4 w-12 h-12 relative">
                <Image
                    src={icon}
                    alt={title}
                    fill
                    className="object-contain invert"
                />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white uppercase mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#ACBAC4] leading-relaxed mb-6">
                {description}
            </p>

            {/* Action */}
            {/* <Link
                href="/about"
                className="
          text-sm font-semibold
          text-[#E1D9BC]
          group-hover:text-white
          transition-colors
        "
            >
                {actionText} →
            </Link> */}
        </div>
    );
}
