import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
	ssr: false,
});

export default function Home() {
	return (
		<main className="flex h-screen bg-black">
			<Scene />
		</main>
	);
}
