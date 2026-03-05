'use client';

import { useState } from 'react';
import { libraryResources, libraryCategories } from '@/lib/library';
import ResourceCard from '@/components/ResourceCard';

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceFilter, setPriceFilter] = useState<string>('all');

  const filteredResources = libraryResources.filter((resource) => {
    // Search filter
    const matchesSearch = searchTerm === '' ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    // Category filter
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;

    // Price filter
    const matchesPrice = priceFilter === 'all' ||
      (priceFilter === 'free' && resource.price === 0) ||
      (priceFilter === 'paid' && resource.price > 0);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ paddingBottom: '20px' }}>
        <div className="container">
          <h1>Browse Library</h1>
          <p style={{ fontSize: 'var(--step-0)', color: 'var(--muted)', marginTop: '8px' }}>
            Explore our collection of {libraryResources.length} cultural and educational resources
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{
            background: '#f9f9f9',
            padding: '20px',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--line)',
            marginBottom: '32px'
          }}>
            {/* Search */}
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="search" style={{
                display: 'block',
                fontSize: 'var(--step--1)',
                fontWeight: '600',
                marginBottom: '6px'
              }}>
                Search Resources
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by title, author, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  fontSize: 'var(--step-0)',
                  background: 'white'
                }}
              />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {/* Category Filter */}
              <div>
                <label htmlFor="category" style={{
                  display: 'block',
                  fontSize: 'var(--step--1)',
                  fontWeight: '600',
                  marginBottom: '6px'
                }}>
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    fontSize: 'var(--step--1)',
                    background: 'white'
                  }}
                >
                  <option value="all">All Categories</option>
                  {libraryCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <label htmlFor="price" style={{
                  display: 'block',
                  fontSize: 'var(--step--1)',
                  fontWeight: '600',
                  marginBottom: '6px'
                }}>
                  Price
                </label>
                <select
                  id="price"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    fontSize: 'var(--step--1)',
                    background: 'white'
                  }}
                >
                  <option value="all">All Resources</option>
                  <option value="free">Free Only</option>
                  <option value="paid">Paid Resources</option>
                </select>
              </div>
            </div>

            {/* Results count */}
            <div style={{ marginTop: '16px', fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
              Showing {filteredResources.length} of {libraryResources.length} resources
            </div>
          </div>

          {/* Results */}
          {filteredResources.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: 'var(--muted)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📚</div>
              <h3>No resources found</h3>
              <p>Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}