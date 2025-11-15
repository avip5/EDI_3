import { Brain, CheckCircle2 } from 'lucide-react';

export default function AISummary() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-yellow-400/10 rounded-lg">
            <Brain className="w-6 h-6 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">AI-Generated Summary</h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-400 font-medium">Verified Analysis</span>
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                The <span className="text-white font-semibold">Sony WH-1000XM5</span> stands out as a premium noise-canceling headphone
                with exceptional audio quality and comfort. Based on analysis of <span className="text-yellow-400 font-semibold">12,847 reviews</span> across
                multiple platforms, users consistently praise its industry-leading active noise cancellation, superior sound clarity,
                and long battery life of up to 30 hours.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                The headphones feature adaptive sound control, multi-point connectivity, and premium build quality.
                While priced at the higher end, the overwhelming consensus indicates excellent value for professionals
                and audiophiles seeking top-tier wireless headphones.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div>
                    <span className="text-gray-500">Analyzed:</span>
                    <span className="ml-2 text-white font-medium">12,847 reviews</span>
                  </div>
                  <div className="w-px bg-gray-700"></div>
                  <div>
                    <span className="text-gray-500">Platforms:</span>
                    <span className="ml-2 text-white font-medium">4 sources</span>
                  </div>
                  <div className="w-px bg-gray-700"></div>
                  <div>
                    <span className="text-gray-500">Confidence:</span>
                    <span className="ml-2 text-yellow-400 font-medium">98.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
