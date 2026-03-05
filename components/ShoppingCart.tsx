'use client';

import { useState, useEffect } from 'react';
import { LibraryResource } from '@/lib/library';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from '@/components/icons/CartIcon';

interface CartItem {
  resource: LibraryResource;
  quantity: number;
}

function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('behelo-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('behelo-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // const addToCart = (resource: LibraryResource) => {
  //   setCartItems(prev => {
  //     const existingItem = prev.find(item => item.resource.id === resource.id);
  //     if (existingItem) {
  //       return prev; // Already in cart, don't add again
  //     }
  //     return [...prev, { resource, quantity: 1 }];
  //   });
  // };

  const removeFromCart = (resourceId: string) => {
    setCartItems(prev => prev.filter(item => item.resource.id !== resourceId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.resource.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const CartButton = () => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      style={{
        position: 'relative',
        background: 'var(--accent)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s ease'
      }}
    >
      <CartIcon size={20} color="white" />
      {getCartCount() > 0 && (
        <span style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          background: '#ff4444',
          color: 'white',
          borderRadius: '50%',
          width: '18px',
          height: '18px',
          fontSize: '0.7rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600'
        }}>
          {getCartCount()}
        </span>
      )}
    </button>
  );

  return (
    <>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1001
            }}
          />

          {/* Cart Panel */}
          <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '400px',
            height: '100vh',
            background: 'white',
            boxShadow: 'var(--shadow-2)',
            zIndex: 1002,
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              padding: '20px',
              borderBottom: '1px solid var(--line)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{ margin: 0 }}>Shopping Cart</h3>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'var(--muted)'
                }}
              >
                ×
              </button>
            </div>

            {/* Cart Items */}
            <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
              {cartItems.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  color: 'var(--muted)',
                  padding: '40px 20px'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🛒</div>
                  <p>Your cart is empty</p>
                  <Link
                    href="/library/browse"
                    onClick={() => setIsOpen(false)}
                    className="btn-text"
                  >
                    Browse Resources →
                  </Link>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cartItems.map((item) => (
                    <div key={item.resource.id} style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '8px'
                    }}>
                      <Image
                        src={item.resource.coverImage}
                        alt={item.resource.title}
                        width={60}
                        height={80}
                        style={{ borderRadius: '4px', objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          margin: '0 0 4px 0',
                          fontSize: 'var(--step--1)',
                          lineHeight: '1.3'
                        }}>
                          {item.resource.title}
                        </h4>
                        <p style={{
                          margin: '0 0 8px 0',
                          fontSize: 'var(--step--1)',
                          color: 'var(--muted)'
                        }}>
                          {item.resource.author.name}
                        </p>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <span style={{ fontWeight: '600' }}>
                            ${item.resource.price.toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.resource.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#ff4444',
                              cursor: 'pointer',
                              fontSize: 'var(--step--1)'
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div style={{
                padding: '20px',
                borderTop: '1px solid var(--line)',
                background: '#f9f9f9'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontWeight: '600' }}>Total:</span>
                  <span style={{ fontWeight: '700', fontSize: 'var(--step-1)' }}>
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={clearCart}
                    style={{
                      flex: 1,
                      padding: '10px',
                      border: '1px solid var(--line)',
                      background: 'white',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: 'var(--step--1)'
                    }}
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={() => {
                      // For now, direct to first item's checkout
                      // In full implementation, handle multiple items
                      if (cartItems.length > 0) {
                        window.location.href = `/library/checkout/${cartItems[0].resource.id}`;
                      }
                    }}
                    style={{
                      flex: 2,
                      padding: '10px',
                      background: 'var(--accent)',
                      color: 'white',
                      textAlign: 'center',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: 'var(--step--1)',
                      cursor: 'pointer'
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;

// Export CartButton for use in Navigation
export function useCartButton() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('behelo-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  const getCartCount = () => {
    return cartItems.length;
  };

  const CartButton = () => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      style={{
        position: 'relative',
        background: 'var(--accent)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s ease'
      }}
    >
      <CartIcon size={20} color="white" />
      {getCartCount() > 0 && (
        <span style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          background: '#ff4444',
          color: 'white',
          borderRadius: '50%',
          width: '18px',
          height: '18px',
          fontSize: '0.7rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600'
        }}>
          {getCartCount()}
        </span>
      )}
    </button>
  );

  return { CartButton, isOpen, setIsOpen };
}