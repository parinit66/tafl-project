import ChomskyDiagram from "./ChomskyDiagram";
import GrammarBubblesRow from "./GrammarBubblesRow";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 font-sans">
      <main className="flex flex-1 flex-row w-full max-w-7xl mx-auto py-16 px-4 gap-8">
        {/* Left Info Panel */}
        <section className="flex-1 flex flex-col justify-center items-start max-w-lg">
          <h1 className="text-5xl font-extrabold mb-6 text-indigo-700 dark:text-indigo-300 drop-shadow-lg">Chomsky Hierarchy</h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6">Visualize the four fundamental classes of formal languages, their relationships, and the automata that recognize them. Click the diagram or explore the grammar bubbles below!</p>
          <ul className="list-disc ml-6 text-zinc-600 dark:text-zinc-300 mb-4">
            <li>Regular: DFA/NFA</li>
            <li>Context-Free: PDA</li>
            <li>Context-Sensitive: LBA</li>
            <li>Recursively Enumerable: Turing Machine</li>
          </ul>
          <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">Scroll horizontally to see all grammar types.</div>
        </section>
        {/* Right Diagram Panel */}
        <section className="flex-1 flex flex-col items-center justify-center">
          <ChomskyDiagram />
        </section>
      </main>
      {/* Grammar Bubbles Row */}
      <div className="w-full max-w-6xl mx-auto">
        <GrammarBubblesRow />
      </div>
    </div>
  );
}
