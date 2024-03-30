import Intro from '@/components/intro';
import Skills from '../components/skills';

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <Skills />
        </main>
    );
}
