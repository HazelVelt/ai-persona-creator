
import React from 'react';
import { Character } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, MessageCircle, Trash2 } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onSelect: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isActive?: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onSelect,
  onEdit,
  onDelete,
  isActive = false,
}) => {
  return (
    <Card className={`w-full overflow-hidden transition-all duration-300 group hover:scale-[1.02] ${
      isActive ? 'ring-2 ring-accent1' : ''
    }`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
        
        <img
          src={character.imageUrl || '/placeholder.svg'}
          alt={character.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-lg font-semibold text-white truncate">{character.name}</h3>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
          {character.description}
        </p>
        
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex flex-col">
              <span className="text-white/60">Kinkiness</span>
              <span className="font-medium">{character.personality.kinkiness}%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/60">Dominance</span>
              <span className="font-medium">{character.personality.dominance}%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/60">Submissiveness</span>
              <span className="font-medium">{character.personality.submissiveness}%</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 mr-1 transition-all hover:bg-accent1/20"
            onClick={() => onEdit(character.id)}
          >
            <Pencil className="h-4 w-4 mr-2" /> Edit
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="flex-1 ml-1 bg-accent1 hover:bg-accent1/80"
            onClick={() => onSelect(character.id)}
          >
            <MessageCircle className="h-4 w-4 mr-2" /> Chat
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => onDelete(character.id)}
        >
          <Trash2 className="h-4 w-4 mr-2" /> Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
