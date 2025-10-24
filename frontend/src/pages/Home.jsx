import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Zap, Heart, ShoppingBag, ArrowRight, Sparkles, Award, Clock, Shield } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const heroSlides = [
    {
      id: 1,
      category: "MEN'S COLLECTION",
      title: "Power Your Steps",
      subtitle: "Premium athletic and casual footwear crafted for the modern man",
      description: "Discover cutting-edge designs that blend style with performance",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=700&fit=crop",
      cta: "Explore Men's Range",
      bgGradient: "from-slate-900/95 via-blue-900/95 to-indigo-900/95",
      accentColor: "blue"
    },
    {
      id: 2,
      category: "WOMEN'S COLLECTION",
      title: "Elegance in Every Step",
      subtitle: "Sophisticated designs for the confident woman",
      description: "From boardroom to weekend brunch, find your perfect pair",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1400&h=700&fit=crop",
      cta: "Discover Women's Styles",
      bgGradient: "from-purple-900/95 via-pink-900/95 to-rose-900/95",
      accentColor: "pink"
    },
    {
      id: 3,
      category: "KIDS' COLLECTION",
      title: "Adventures Begin Here",
      subtitle: "Durable comfort for little feet on big adventures",
      description: "Playful designs with the support growing kids need",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1400&h=700&fit=crop",
      cta: "Shop Kids Collection",
      bgGradient: "from-teal-900/95 via-green-900/95 to-emerald-900/95",
      accentColor: "green"
    },
    {
      id: 4,
      category: "NEW SEASON",
      title: "Fall/Winter 2025",
      subtitle: "Step into the future of footwear fashion",
      description: "Limited edition releases and exclusive collaborations",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1400&h=700&fit=crop",
      cta: "View Latest Drops",
      bgGradient: "from-orange-900/95 via-amber-900/95 to-yellow-900/95",
      accentColor: "orange"
    }
  ];

  const menProducts = [
    {
      id: 1,
      name: "Urban Elite Runner",
      category: "Men's Athletic",
      price: 14999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 234,
      badge: "Best Seller",
      colors: 4,
      sizes: "UK 6-12"
    },
    {
      id: 2,
      name: "Classic Leather Oxford",
      category: "Men's Formal",
      price: 12499,
      originalPrice: 15999,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 189,
      badge: "Premium",
      colors: 3,
      sizes: "UK 6-11"
    },
    {
      id: 3,
      name: "Street Sport Pro",
      category: "Men's Casual",
      price: 10999,
      originalPrice: 13999,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "Trending",
      colors: 5,
      sizes: "UK 7-13"
    },
    {
      id: 4,
      name: "Adventure Trail Max",
      category: "Men's Outdoor",
      price: 16999,
      originalPrice: 21999,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 298,
      badge: "New",
      colors: 3,
      sizes: "UK 6-12"
    }
  ];

  const womenProducts = [
    {
      id: 5,
      name: "Luxe Comfort Heels",
      category: "Women's Formal",
      price: 13999,
      originalPrice: 17999,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 267,
      badge: "Hot Pick",
      colors: 6,
      sizes: "UK 3-8"
    },
    {
      id: 6,
      name: "Sport Chic Runner",
      category: "Women's Athletic",
      price: 11999,
      originalPrice: 15999,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 412,
      badge: "Best Seller",
      colors: 7,
      sizes: "UK 3-9"
    },
    {
      id: 7,
      name: "Elegant Ankle Boots",
      category: "Women's Boots",
      price: 15999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 178,
      badge: "Luxury",
      colors: 4,
      sizes: "UK 3-8"
    },
    {
      id: 8,
      name: "Casual Slip-On Style",
      category: "Women's Casual",
      price: 8999,
      originalPrice: 11999,
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 145,
      badge: "Sale",
      colors: 5,
      sizes: "UK 3-9"
    }
  ];

  const brands = [
    { name: "Nike", logo: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=200&h=100&fit=crop" },
    { name: "Adidas", logo: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=100&fit=crop" },
    { name: "Puma", logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200&h=100&fit=crop" },
    { name: "Reebok", logo: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=200&h=100&fit=crop" },
    { name: "New Balance", logo: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=200&h=100&fit=crop" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const ProductCard = ({ product, delay }) => (
    <div
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            {product.badge}
          </span>
          {product.originalPrice && (
            <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg">
            <Heart size={20} className="text-red-500" />
          </button>
          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg">
            <ShoppingBag size={20} className="text-blue-600" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 text-sm mb-2">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              {product.colors} Colors
            </span>
            <span>•</span>
            <span>{product.sizes}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">
          {product.category}
        </div>
        <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PKR {product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                PKR {product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
          <button className="group flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            Explore
            <ArrowRight size={18} className="transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Slider - Ultra Modern */}
      <div className="relative h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
              <div className="text-white max-w-3xl">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/20">
                  <Sparkles size={16} className="text-yellow-300" />
                  <span className="text-sm font-bold tracking-wider">{slide.category}</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight">
                  {slide.title}
                </h1>
                
                <p className="text-2xl md:text-3xl mb-4 font-light text-gray-100">
                  {slide.subtitle}
                </p>
                
                <p className="text-lg mb-10 text-gray-200 max-w-xl">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 hover:gap-4">
                    {slide.cta}
                    <ArrowRight className="transition-all" size={24} />
                  </button>
                  <button className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
                    View Lookbook
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl p-4 rounded-full hover:bg-white/30 transition-all z-10 border border-white/20 group"
        >
          <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl p-4 rounded-full hover:bg-white/30 transition-all z-10 border border-white/20 group"
        >
          <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={28} />
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-12 bg-white shadow-lg' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div className="flex flex-col items-center">
              <Shield className="mb-2" size={32} />
              <div className="font-bold text-lg">100% Authentic</div>
              <div className="text-sm opacity-90">Guaranteed Original</div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="mb-2" size={32} />
              <div className="font-bold text-lg">Fast Delivery</div>
              <div className="text-sm opacity-90">2-3 Days Shipping</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="mb-2" size={32} />
              <div className="font-bold text-lg">Premium Quality</div>
              <div className="text-sm opacity-90">Top Brand Selection</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="mb-2" size={32} />
              <div className="font-bold text-lg">Easy Returns</div>
              <div className="text-sm opacity-90">30-Day Policy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Men's Collection Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">For Him</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
              Men's Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Engineered for performance, designed for style. Discover footwear that moves with you.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all group">
            View All Men's
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&h=400&fit=crop"
            alt="Featured"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-12 text-white">
              <div className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-bold mb-4 text-sm">
                LIMITED TIME OFFER
              </div>
              <h3 className="text-5xl font-black mb-4">
                Up to 50% Off<br/>Select Styles
              </h3>
              <p className="text-xl mb-8 text-gray-200">
                Exclusive deals on premium footwear. While stocks last.
              </p>
              <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl">
                Shop Sale Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Women's Collection Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              <span className="text-pink-600 font-bold uppercase tracking-wider text-sm">For Her</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
              Women's Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Sophisticated elegance meets all-day comfort. Step into confidence.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all group">
            View All Women's
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {womenProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Brand Partners */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Trusted Brand Partners</h3>
            <p className="text-gray-600">Official retailer of world's leading footwear brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter - Ultra Modern */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full mb-8">
              <TrendingUp size={40} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Get VIP Access
            </h2>
            <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive community and receive early access to new drops, members-only discounts, and style inspiration delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-8 py-5 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 font-medium text-lg"
              />
              <button className="bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-sm opacity-80">
              Join 50,000+ style enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Step Up Your Game?
          </h3>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Explore our complete collection and find your perfect pair today
          </p>
          <button className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-3 group">
            Shop All Collections
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;