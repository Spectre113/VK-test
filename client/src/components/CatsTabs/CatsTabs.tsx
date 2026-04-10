import './CatsTabs.css';

type Tab = 'all' | 'favorites';

interface CatsTabsProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export const CatsTabs = ({ activeTab, onChange }: CatsTabsProps) => {
  return (
    <div className="cats-tabs">
      <button
        className={`cats-tabs__btn ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => onChange('all')}
      >
        Все котики
      </button>

      <button
        className={`cats-tabs__btn ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => onChange('favorites')}
      >
        Любимые котики
      </button>
    </div>
  );
};
