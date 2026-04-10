import './CatsList.css';
import { CatItem } from '../CatItem/CatItem';
import type { Cat } from '../../api/cats';

interface CatsListProps {
  cats: Cat[];
  favoriteIds?: string[];
  onToggleFavorite?: (id: string) => void;
}

export const CatsList = ({
  cats,
  favoriteIds = [],
  onToggleFavorite,
}: CatsListProps) => {
  return (
    <ul className="list-reset cats__list">
      {cats.map((cat) => (
        <CatItem
          key={cat.id}
          id={cat.id}
          url={cat.url}
          isFavorite={favoriteIds.includes(cat.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
};
