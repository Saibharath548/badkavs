import { useState, useMemo } from 'react';
import ServiceGrid from '@/components/ServiceGrid';
import ServiceCategoryFilter from '@/components/ServiceCategoryFilter';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Services</h1>
          <p className="page-header__description">
            Browse BADKAVS services across game development, art, design, and
            creative production. See what&rsquo;s available and what&rsquo;s coming next.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <ServiceCategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <ServiceGrid services={filteredServices} />
        </div>
      </section>

      <CTASection
        title="Need a custom solution?"
        description="Don't see exactly what you need? Reach out and let's discuss your project."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
