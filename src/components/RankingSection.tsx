import { Trophy, ThumbsUp, ThumbsDown, ExternalLink, TrendingUp } from 'lucide-react';

const platformData = [
  {
    rank: 1,
    platform: 'Amazon',
    sentiment: 'Very Positive',
    sentimentColor: 'text-green-400',
    sentimentBg: 'bg-green-400/10',
    sentimentBorder: 'border-green-400/20',
    score: 9.2,
    liked: [
      'Exceptional noise cancellation performance',
      '30+ hour battery life exceeds expectations',
      'Comfortable for extended wear',
      'Premium build quality and materials'
    ],
    disliked: [
      'Premium price point',
      'Case is bulky for travel'
    ]
  },
  {
    rank: 2,
    platform: 'Best Buy',
    sentiment: 'Very Positive',
    sentimentColor: 'text-green-400',
    sentimentBg: 'bg-green-400/10',
    sentimentBorder: 'border-green-400/20',
    score: 8.9,
    liked: [
      'Superior sound quality and clarity',
      'Excellent customer service support',
      'Adaptive sound control works well',
      'Multi-point connection is seamless'
    ],
    disliked: [
      'Touch controls can be overly sensitive',
      'Limited color options available'
    ]
  },
  {
    rank: 3,
    platform: 'Walmart',
    sentiment: 'Positive',
    sentimentColor: 'text-blue-400',
    sentimentBg: 'bg-blue-400/10',
    sentimentBorder: 'border-blue-400/20',
    score: 8.4,
    liked: [
      'Great value during sales periods',
      'Fast shipping and delivery',
      'Intuitive app connectivity'
    ],
    disliked: [
      'Stock availability inconsistent',
      'Some units had minor defects',
      'Customer support response time'
    ]
  },
  {
    rank: 4,
    platform: 'Flipkart',
    sentiment: 'Positive',
    sentimentColor: 'text-blue-400',
    sentimentBg: 'bg-blue-400/10',
    sentimentBorder: 'border-blue-400/20',
    score: 8.1,
    liked: [
      'Competitive pricing in local market',
      'Good packaging and protection',
      'Cashback offers available'
    ],
    disliked: [
      'Longer delivery times',
      'Limited warranty support',
      'Return process can be complex'
    ]
  }
];

export default function RankingSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gray-800/50 border border-gray-700 rounded-full">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Platform Rankings</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Best Places to Buy
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ranked by sentiment analysis, review quality, and overall customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {platformData.map((platform) => (
            <div
              key={platform.rank}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                        <span className="text-xl font-bold text-black">#{platform.rank}</span>
                      </div>
                      {platform.rank === 1 && (
                        <div className="absolute -top-1 -right-1">
                          <Trophy className="w-5 h-5 text-yellow-400" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{platform.platform}</h3>
                      <div className={`inline-flex items-center gap-1.5 mt-1 px-2.5 py-1 ${platform.sentimentBg} ${platform.sentimentBorder} border rounded-full`}>
                        <TrendingUp className={`w-3.5 h-3.5 ${platform.sentimentColor}`} />
                        <span className={`text-xs font-medium ${platform.sentimentColor}`}>
                          {platform.sentiment}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold text-yellow-400">{platform.score}</div>
                    <div className="text-sm text-gray-500">/10</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <ThumbsUp className="w-4 h-4 text-green-400" />
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                        What People Liked
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {platform.liked.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <ThumbsDown className="w-4 h-4 text-red-400" />
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                        What People Disliked
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {platform.disliked.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-yellow-400/50 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span className="font-medium">View Platform Details</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
