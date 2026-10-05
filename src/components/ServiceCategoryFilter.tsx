import { categories } from '@/data/categories';

interface ServiceCategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ServiceCategoryFilter({
  activeCategory,
  onCategoryChange,
}: ServiceCategoryFilterProps) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filter services by category">
      <button
        className={`category-filter__btn ${activeCategory === 'all' ? 'category-filter__btn--active' : ''}`}
        onClick={() => onCategoryChange('all')}
        role="tab"
        aria-selected={activeCategory === 'all'}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-filter__btn ${activeCategory === cat.id ? 'category-filter__btn--active' : ''}`}
          onClick={() => onCategoryChange(cat.id)}
          role="tab"
          aria-selected={activeCategory === cat.id}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
