import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <header class="text-center my-8">
        <h1 class="text-5xl font-bold">TERATA AI</h1>
        <p class="text-xl text-gray-600">
          Blossoming Intelligence, Inspired by Nature
        </p>
      </header>
      <main>
        <section class="my-12">
          <h2 class="text-3xl font-semibold">Our Philosophy</h2>
          <p class="text-lg text-gray-700">
            Just as the water lily adapts and thrives in various environments,
            TERATA AI adapts and evolves to meet the ever-changing needs of the
            AI era. Our solutions are designed to bloom with innovation,
            resilience, and beauty.
          </p>
        </section>
        <section class="my-12">
          <h2 class="text-3xl font-semibold">Features</h2>
          <ul class="list-disc list-inside">
            <li class="my-2">Advanced Machine Learning Algorithms</li>
            <li class="my-2">Real-Time Data Processing</li>
            <li class="my-2">Customizable Solutions</li>
            <li class="my-2">User-Friendly Interface</li>
          </ul>
        </section>
        <section class="my-12">
          <h2 class="text-3xl font-semibold">Why Choose TERATA AI?</h2>
          <p class="text-lg text-gray-700">
            At TERATA AI, we believe in harnessing the power of artificial
            intelligence to create solutions that are not only powerful but also
            harmonious with the needs of our clients. Our technology is rooted
            in nature's wisdom and is built to adapt, grow, and flourish in
            diverse environments.
          </p>
        </section>
        <section class="my-12 text-center">
          <h2 class="text-3xl font-semibold">Get Started</h2>
          <button class="mt-4 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Sign Up Now
          </button>
        </section>
      </main>
      <footer class="text-center my-8">
        <p class="text-gray-600">© 2024 TERATA AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
