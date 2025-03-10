import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, MessageCircle, Pencil, Trash2, Bot, Settings, Stars } from 'lucide-react';

interface LandingPageProps {
  onCreateCharacter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onCreateCharacter }) => {
  return (
    <div className="flex flex-col h-full overflow-auto scrollbar-none">
      {/* Hero Section (without banner image) */}
      <div className="w-full py-16 bg-gradient-to-br from-background via-background/95 to-accent1/10">
        <div className="text-center px-4 w-full max-w-4xl mx-auto">
          <div className="glass-morphism p-8 rounded-xl border border-white/20 shadow-xl">
            <div className="inline-block p-3 rounded-full bg-accent1/20 mb-4">
              <Stars className="h-8 w-8 text-accent1" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in mb-4">
              Welcome to AI Haven
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.1s" }}>
              Your personal space for creating and chatting with unique AI companions
            </p>
            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button 
                onClick={onCreateCharacter}
                className="bg-accent1 hover:bg-accent1/80 text-white"
                size="lg"
              >
                <Plus className="mr-2 h-5 w-5" />
                Create Your First Character
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-4 py-16 overflow-y-auto scrollbar-none">  
        {/* Feature Tabs */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="chat" className="data-[state=active]:bg-accent1/20">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chatting
              </TabsTrigger>
              <TabsTrigger value="customize" className="data-[state=active]:bg-accent1/20">
                <Pencil className="mr-2 h-4 w-4" />
                Customization
              </TabsTrigger>
              <TabsTrigger value="manage" className="data-[state=active]:bg-accent1/20">
                <Settings className="mr-2 h-4 w-4" />
                Management
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="glass-morphism p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">Engaging Conversations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <MessageCircle className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Chat with characters that respond based on their unique personality traits</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <MessageCircle className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Persistent conversations are saved locally for your privacy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <MessageCircle className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Uses your local language model for complete privacy and ownership</span>
                    </li>
                  </ul>
                </div>
                <div className="glass-morphism p-4 rounded-lg max-w-md">
                  <div className="chat-bubble flex items-start mb-3">
                    <div className="bg-secondary p-3 rounded-lg mr-5 ml-auto">
                      <p className="text-sm">Hello, how are you today?</p>
                    </div>
                  </div>
                  <div className="chat-bubble flex items-start">
                    <div className="bg-accent1/20 p-3 rounded-lg ml-0">
                      <p className="text-sm">I'm feeling creative and witty today! What would you like to chat about?</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="customize" className="glass-morphism p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">Deep Customization</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <Pencil className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Adjust personality traits like humor, intelligence, creativity, and more</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <Pencil className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Generate custom character images with Stability AI integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <Pencil className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Create detailed backstories to shape your character's responses</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="glass-morphism rounded-lg p-4 max-w-md">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Creativity</h4>
                      <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div className="bg-accent1 h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Intelligence</h4>
                      <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div className="bg-accent1 h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Humor</h4>
                      <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div className="bg-accent1 h-full rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="manage" className="glass-morphism p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">Easy Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <Settings className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Switch between different LLM providers and models</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <Settings className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Dark and light theme support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent1/20 p-1 rounded-full mr-3 mt-1">
                        <Settings className="h-4 w-4 text-accent1" />
                      </div>
                      <span>Organize and manage all your AI characters</span>
                    </li>
                  </ul>
                </div>
                <div className="glass-morphism p-4 rounded-lg max-w-md flex flex-col gap-2">
                  <div className="flex justify-between items-center p-2 rounded bg-secondary/20">
                    <span className="font-medium">Language Model</span>
                    <span className="text-sm">Ollama / Mistral</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-secondary/20">
                    <span className="font-medium">Image Generation</span>
                    <span className="text-sm">Stability AI</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-secondary/20">
                    <span className="font-medium">Theme</span>
                    <span className="text-sm">System Default</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Requirements Section */}
        <div className="mt-12 glass-morphism p-6 rounded-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Bot className="mr-2 h-5 w-5 text-accent1" />
            Getting Started
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Requirements</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="min-w-5 text-accent1 mr-2">•</div>
                  <span>
                    <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                      Ollama
                    </a> 
                    {" "}running locally for text generation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 text-accent1 mr-2">•</div>
                  <span>
                    <a href="https://platform.stability.ai" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                      Stability AI
                    </a> 
                    {" "}API key for image generation (optional)
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Quick Start</h4>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                <li>Create your first character using the sidebar</li>
                <li>Customize their personality traits and appearance</li>
                <li>Start chatting with your new AI companion</li>
                <li>Use the settings panel to configure your LLM preferences</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
