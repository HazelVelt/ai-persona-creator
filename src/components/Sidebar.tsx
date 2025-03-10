
import React, { useState, useMemo } from 'react';
import { Settings, Plus, ChevronLeft, ChevronRight, Heart, Tags } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCharacter } from '@/contexts/CharacterContext';
import CharacterCard from '@/components/CharacterCard';
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
  onCreateCharacter: () => void;
  onEditCharacter: (id: string) => void;
  onSettingsOpen: () => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onCreateCharacter,
  onEditCharacter,
  onSettingsOpen,
  isSidebarCollapsed,
  toggleSidebar,
  selectedTags,
  toggleTag,
}) => {
  const { characters, setActiveCharacter, deleteCharacter, activeCharacter, toggleFavorite, cardSize } = useCharacter();
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  
  // Calculate if cards should be compact based on scale
  const isCompact = cardSize < 40;
  
  // Calculate specific card size class based on the scale
  const getCardSizeClass = () => {
    if (cardSize < 20) return 'super-compact';
    if (cardSize < 35) return 'compact';
    if (cardSize < 50) return 'normal';
    if (cardSize < 70) return 'large';
    if (cardSize < 85) return 'extra-large';
    return 'massive';
  };

  // Extract all tags from characters
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    characters.forEach(char => {
      if (char.tags && char.tags.length > 0) {
        char.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet);
  }, [characters]);

  // Filter and group characters
  const { favoriteCharacters, otherCharacters } = useMemo(() => {
    const favorites = characters.filter(c => c.isFavorite);
    const others = characters.filter(c => !c.isFavorite);
    
    return {
      favoriteCharacters: favorites,
      otherCharacters: others
    };
  }, [characters]);
  
  // Characters to display based on filter
  const displayCharacters = useMemo(() => {
    let filtered = showOnlyFavorites 
      ? favoriteCharacters 
      : [...favoriteCharacters, ...otherCharacters];
    
    // If tags are selected, filter by those tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(char => {
        if (!char.tags || char.tags.length === 0) return false;
        // Character must have ALL selected tags
        return selectedTags.every(tag => char.tags?.includes(tag));
      });
    }
    
    return filtered;
  }, [favoriteCharacters, otherCharacters, showOnlyFavorites, selectedTags]);

  return (
    <div className={`${isSidebarCollapsed ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-[320px]'} border-r border-border bg-background/95 backdrop-blur-sm flex flex-col h-full transition-all duration-300 relative z-30`}>
      <div className="p-4 border-b flex justify-between items-center">
        {!isSidebarCollapsed && (
          <h1 className="text-xl font-bold text-gradient">
            LumeAI
          </h1>
        )}
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onSettingsOpen}
            className="h-8 w-8 rounded-full"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isSidebarCollapsed && (
        <>
          <div className="flex justify-between items-center p-4">
            <h2 className="text-sm font-semibold text-foreground/70">Your Characters</h2>
            <Button 
              variant="ghost"
              size="sm"
              onClick={onCreateCharacter}
              className="flex items-center text-xs h-8"
            >
              <Plus className="h-4 w-4 mr-1" />
              Create New
            </Button>
          </div>

          {/* Tags filter section */}
          {allTags.length > 0 && (
            <div className="px-4 pb-2">
              <div className="flex items-center mb-2">
                <Tags className="h-4 w-4 mr-2 text-muted-foreground" />
                <h3 className="text-xs font-medium text-muted-foreground">Filter by Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {allTags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Favorites filter */}
          <div className="px-4 pb-2 space-y-2">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                className={`text-xs h-7 flex items-center gap-1 ${showOnlyFavorites ? 'bg-accent1/20' : ''}`}
              >
                <Heart className={`h-3 w-3 ${showOnlyFavorites ? 'text-red-500 fill-red-500' : ''}`} />
                {showOnlyFavorites ? 'Showing favorites' : 'Show all'}
              </Button>
              {favoriteCharacters.length > 0 && (
                <span className="ml-1 text-xs text-muted-foreground">
                  ({favoriteCharacters.length} favorite{favoriteCharacters.length > 1 ? 's' : ''})
                </span>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 scrollbar-none">
            {characters.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="glass-morphism p-6 rounded-lg max-w-[240px] shadow-md">
                  <h3 className="text-lg font-semibold mb-2">No Characters Yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create your first AI character to start chatting
                  </p>
                  <Button 
                    onClick={onCreateCharacter}
                    className="w-full bg-accent1 hover:bg-accent1/80"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Character
                  </Button>
                </div>
              </div>
            ) : displayCharacters.length === 0 ? (
              <div className="text-center p-4">
                <p className="text-sm text-muted-foreground">
                  {selectedTags.length > 0 
                    ? 'No characters match the selected tags.' 
                    : 'No favorites yet. Add characters to favorites to see them here.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {/* Show all filtered characters in one section */}
                <div className="space-y-3">
                  {displayCharacters.map((character) => (
                    <CharacterCard
                      key={character.id}
                      character={character}
                      onSelect={setActiveCharacter}
                      onEdit={onEditCharacter}
                      onDelete={deleteCharacter}
                      onToggleFavorite={toggleFavorite}
                      isActive={activeCharacter?.id === character.id}
                      showPersonalityValues={false}
                      compact={isCompact}
                      sizeClass={getCardSizeClass()}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Sidebar toggle button - improved positioning */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="absolute top-1/2 -right-4 h-8 w-8 rounded-full bg-background border border-border shadow-md z-50"
      >
        {isSidebarCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default Sidebar;
