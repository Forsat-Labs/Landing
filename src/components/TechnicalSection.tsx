
import React from 'react';
import { Box, CircleOff, Lock, MessageSquare, Server, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TechnicalSection: React.FC = () => {
  return (
    <div className="bg-forsat-dark text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Technical <span className="text-bitcoin">Architecture</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Built on Bitcoin's foundation with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <Box className="h-10 w-10 text-bitcoin mb-4" />
              <CardTitle className="text-white">Bitcoin Layer 1</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Uses Runes for YES/NO and $FOR tokens, with on-chain transactions for all operations. PSBTs execute CLOB and LMSR transactions ensuring security, efficiency, and scalability.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-forsat-blue mb-4" />
              <CardTitle className="text-white">AI Agent</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Monitors market creation and resolution off-chain for quality and security, approving markets before on-chain activation, with PSBTs facilitating secure transaction management.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <Lock className="h-10 w-10 text-green-500 mb-4" />
              <CardTitle className="text-white">User Ownership</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Users self-custody BTC and YES/NO shares via Bitcoin wallets, signing all on-chain transactions, with Forsat never holding assets.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <Server className="h-10 w-10 text-purple-500 mb-4" />
              <CardTitle className="text-white">UTXO Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                A dedicated script automatically creates a dynamic number of UTXOs for the "redeem" transaction, ensuring scalability and efficiency for on-chain redemption.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <CircleOff className="h-10 w-10 text-red-500 mb-4" />
              <CardTitle className="text-white">No Centralization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Fully decentralized with no KYC, no wrapped tokens, and no centralized entities. Pure Bitcoin-native speculation secured by the world's most trusted blockchain.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all">
            <CardHeader>
              <Shield className="h-10 w-10 text-yellow-500 mb-4" />
              <CardTitle className="text-white">Resolution Mechanism</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                A fully decentralized, community-driven mechanism leveraging Bitcoin mainnet and $FOR stakers to ensure fairness and transparency in market outcomes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSection;
