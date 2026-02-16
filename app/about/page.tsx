import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import TeamSection from "@/components/TeamSection";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";
import SafetyCompliance from "@/components/SafetyCompliance";

export default function AboutPage() {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <AboutHero />
            <OurStory />
            {/* <TeamSection /> */}
            <TechStack />
            <Achievements />
            {/* <SafetyCompliance /> */}
        </main>
    );
}
