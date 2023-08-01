export default async function Home() {
  const json_data = await fetch('https://bucket-fetcher.shelbe-ent.workers.dev').then(response => response.json())
  const companyName = await json_data.companyName
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2">
                <a
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Company name is {companyName}
                    </h2>
                </a>
            </div>
        </main>
  )
}
