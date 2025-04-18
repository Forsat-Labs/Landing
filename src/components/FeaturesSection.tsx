
import React from 'react';
import { Bitcoin, Coins, UserPlus, UsersRound } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Bitcoin Mainnet Exclusivity",
    description: "Built exclusively on Bitcoin mainnet using Runes for all assets, ensuring unparalleled security and verifiability without reliance on Layer 2 solutions or bridges.",
    icon: Bitcoin,
    color: "text-bitcoin"
  },
  {
    title: "$FOR: The Utility Token",
    description: "Represents ownership in Forsat with 50% of all fees distributed to $FOR holders, rewarding users who stake their belief in the platform.",
    icon: Coins,
    color: "text-forsat-blue"
  },
  {
    title: "Permissionless Market Creation",
    description: "Create prediction markets on any outcome by paying a small $FOR fee. Markets are reviewed by AI and become tradable immediately after creation.",
    icon: UserPlus,
    color: "text-green-500"
  },
  {
    title: "Community-Driven Experience",
    description: "Built for and by the Bitcoin community with transparent fee distribution and community governance through $FOR holdings.",
    icon: UsersRound,
    color: "text-purple-500"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Core <span className="text-bitcoin">Features</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Forsat brings prediction markets to Bitcoin with a suite of innovative features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono bg-gray-100">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
