// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js TailwindCSS</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <div class="mt-1">
          <input type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-lg text-center m-4">TailwindUI/Next.js</h1>
        <p className="bg-green-600">This is a test of the tailwind next integration.</p>
      </div>
    </div>
  )
}