import dynamic from "next/dynamic";

const Audit = dynamic(() => import('@/components/Audit/Audit'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="p-2">
      <Audit />
    </main>
  )
}
