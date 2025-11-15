import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-yellow-400 rounded-lg">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Purchase Ranker AI</h3>
              <p className="text-sm text-gray-500">Intelligent Purchase Decisions</p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              About
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              How It Works
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Purchase Ranker AI. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Powered by
            <span className="text-yellow-400 font-medium">AI Intelligence</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
    </footer>
  );
}
