
export interface Character {
  id: string;
  name: string;
  description: string;
  personality: {
    kinkiness: number;
    dominance: number;
    submissiveness: number;
    intelligence?: number;
    empathy?: number;
    creativity?: number;
    humor?: number;
  };
  imageUrl: string;
  defaultPrompt: string;
  isFavorite?: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: number;
  isUser: boolean;
}

export interface ModelConfig {
  name: string;
  endpoint: string;
  type: 'ollama' | 'stability';
  apiKey?: string;
}
