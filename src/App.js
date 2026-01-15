
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Clock, Users, Check, Zap, Award, Shield, Menu, X } from 'lucide-react';

const DznKidsStore = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(true);
  const [currentBuyer, setCurrentBuyer] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "https://i.imgur.com/XFkkQdQ.png",
    "https://i.imgur.com/nZYPwa6.png",
    "https://i.imgur.com/TutbY3V.png",
    "https://i.imgur.com/FJLNMCo.png"
  ];

  const buyers = [
    "Maria Silva",
    "Fernanda Costa",
    "João Pedro",
    "Ana Paula",
    "Lucas Oliveira",
    "Juliana Santos",
    "Rafael Almeida",
    "Camila Rodrigues"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBuyer(prev => (prev + 1) % buyers.length);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index) => {
    setModalImage(index);
    setShowImageModal(true);
  };

  const handleAddToCart = () => {
    window.open('https://lxpay.com.br/checkout/072819e0-6cc2-4554-9142-4a95eddcfd2e?offer=909b33ba-9570-4278-8c28-ad083af5e18d', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 md:space-x-3">
              <img 
                src="https://i.imgur.com/CukTqd9.png" 
                alt="Dzn KiDS Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain animate-bounce"
              />
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 text-transparent bg-clip-text drop-shadow-lg transform hover:scale-110 transition-transform cursor-pointer" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive',
                letterSpacing: '1px'
              }}>
                Dzn KiDS ✨
              </h1>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-white text-purple-600 p-2 rounded-full"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Search and Cart */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <input 
                type="text" 
                placeholder="O que você está procurando?" 
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
            
            <button className="hidden md:flex bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 items-center space-x-2 shadow-lg">
              <ShoppingCart size={20} />
              <span>Carrinho</span>
            </button>

            {/* Mobile Cart Icon */}
            <button className="md:hidden bg-white text-purple-600 p-2 rounded-full ml-2">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mb-3">
            <input 
              type="text" 
              placeholder="O que você está procurando?" 
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center justify-center space-x-6 text-sm font-semibold">
            <a href="#" className="hover:text-yellow-300 transition-colors">Brinquedos</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Jogos</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Bebê</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Esporte e Lazer</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Escolar</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Lançamentos</a>
            <a href="#" className="bg-yellow-400 text-purple-700 px-4 py-1 rounded-full hover:bg-yellow-300 transition-colors">PROMOÇÃO</a>
          </nav>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <nav className="md:hidden flex flex-col space-y-3 text-sm font-semibold pb-3">
              <a href="#" className="hover:text-yellow-300 transition-colors">Brinquedos</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Jogos</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Bebê</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Esporte e Lazer</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Escolar</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Lançamentos</a>
              <a href="#" className="bg-yellow-400 text-purple-700 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors text-center">PROMOÇÃO</a>
            </nav>
          )}
        </div>
      </header>

      {/* Live Purchase Notification */}
      <div className={`fixed top-24 right-2 md:right-4 z-50 transition-all duration-500 transform ${showNotification ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'}`}>
        <div className="bg-white rounded-2xl shadow-2xl p-3 md:p-4 border-2 border-green-400 flex items-center space-x-2 md:space-x-3 max-w-xs md:max-w-sm">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
            <Check className="text-white" size={20} />
          </div>
          <div>
            <p className="font-bold text-green-600 text-sm md:text-base">Compra Realizada!</p>
            <p className="text-xs md:text-sm text-gray-700">{buyers[currentBuyer]} acabou de comprar</p>
            <p className="text-xs text-gray-500">há poucos segundos</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
          <span>Home</span> / <span>Jogos</span> / <span className="text-purple-600 font-semibold">Tapalavras</span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border-2 md:border-4 border-purple-300">
          {/* Image Gallery */}
          <div>
            <div 
              className="relative bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4 cursor-pointer transform transition-all hover:scale-105 shadow-xl border-2 md:border-4 border-yellow-300"
              onClick={() => handleImageClick(selectedImage)}
            >
              <img
                src={images[selectedImage]}
                alt="Tapalavras"
                className="w-full h-64 md:h-96 object-contain p-3 md:p-4"
              />
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-lg shadow-lg transform -rotate-12">
                67% OFF!
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`cursor-pointer rounded-lg md:rounded-xl overflow-hidden border-2 md:border-4 transition-all transform hover:scale-110 ${
                    selectedImage === idx ? 'border-purple-500 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-16 md:h-24 object-contain bg-gray-50 p-1 md:p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
              Jogo de Tabuleiro - Tapalavras - Multikids
            </h2>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm md:text-base text-gray-600 font-semibold">(487 avaliações)</span>
            </div>

            {/* Price */}
            <div className="mb-4 md:mb-6 bg-gradient-to-r from-green-100 to-blue-100 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 md:border-3 border-green-300">
              <div className="flex items-baseline space-x-2 md:space-x-3 mb-2">
                <span className="text-gray-500 line-through text-lg md:text-2xl">R$ 149,99</span>
                <span className="bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">-67%</span>
              </div>
              <div className="text-3xl md:text-5xl font-bold text-green-600 mb-2">R$ 49,99</div>
              <p className="text-xs md:text-sm text-gray-600">Em até 3x de R$ 16,66 sem juros</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="flex items-center space-x-2 bg-purple-100 p-2 md:p-3 rounded-lg md:rounded-xl border-2 border-purple-300">
                <Zap className="text-purple-600 flex-shrink-0" size={18} />
                <span className="text-xs md:text-sm font-semibold text-purple-800">Entrega Rápida</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-100 p-2 md:p-3 rounded-lg md:rounded-xl border-2 border-pink-300">
                <Shield className="text-pink-600 flex-shrink-0" size={18} />
                <span className="text-xs md:text-sm font-semibold text-pink-800">Compra Segura</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-100 p-2 md:p-3 rounded-lg md:rounded-xl border-2 border-yellow-300">
                <Award className="text-yellow-600 flex-shrink-0" size={18} />
                <span className="text-xs md:text-sm font-semibold text-yellow-800">Garantia 30 dias</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 p-2 md:p-3 rounded-lg md:rounded-xl border-2 border-blue-300">
                <Users className="text-blue-600 flex-shrink-0" size={18} />
                <span className="text-xs md:text-sm font-semibold text-blue-800">+1000 vendidos</span>
              </div>
            </div>

            {/* Quantity and Buy */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-4 md:mb-6">
              <div className="flex items-center justify-center space-x-3 bg-gray-100 rounded-xl p-2 border-2 border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 transition-colors"
                >
                  +
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg border-2 border-green-700 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} className="md:w-6 md:h-6" />
                <span>COMPRAR AGORA</span>
              </button>
            </div>

            {/* Urgency Timer */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 md:p-4 rounded-xl border-2 border-orange-300 flex items-center justify-center space-x-2 md:space-x-3">
              <Clock className="text-red-600 animate-pulse flex-shrink-0" size={20} />
              <span className="font-bold text-red-600 text-xs md:text-base text-center">Oferta por tempo limitado! Aproveite agora!</span>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-6 md:mt-8 bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border-2 md:border-4 border-blue-300">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center space-x-2 md:space-x-3">
            <span className="text-3xl md:text-4xl">📝</span>
            <span>Descrição do Produto</span>
          </h3>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-3 md:space-y-4">
            <p className="bg-yellow-100 p-3 md:p-4 rounded-xl border-2 border-yellow-300 font-semibold text-sm md:text-base">
              ⚠️ As cores podem variar entre as imagens mostradas acima e o produto. Imagens meramente ilustrativas.
            </p>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 md:p-6 rounded-xl border-2 border-purple-300">
              <h4 className="text-xl md:text-2xl font-bold text-purple-800 mb-2 md:mb-3">🎯 Sobre o Jogo</h4>
              <p className="text-sm md:text-lg">
                Aperte o botão antes que o tempo acabe! Desafie sua criatividade e rapidez com o Tapalavras da Multikids! 
                Você e seus amigos têm apenas 10 segundos para encontrar uma resposta usando as letras disponíveis na roda. 
                Parece fácil? Espere até que as opções comecem a se esgotar!
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 md:p-6 rounded-xl border-2 border-blue-300">
              <h4 className="text-xl md:text-2xl font-bold text-blue-800 mb-2 md:mb-3">⚡ Como Funciona</h4>
              <p className="text-sm md:text-lg">
                Quanto mais letras usadas, mais desafiador fica! A pressão aumenta à medida que mais letras são usadas! 
                Nomeie, aperte e passe a vez: quem ficar sem resposta, perde!
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-4 md:p-6 rounded-xl border-2 border-pink-300">
              <h4 className="text-xl md:text-2xl font-bold text-pink-800 mb-2 md:mb-3">🎁 Presente Perfeito</h4>
              <p className="text-sm md:text-lg">
                Este brinquedo é o presente ideal para meninos e meninas de todas as idades, especialmente recomendado 
                para maiores de 08 anos de idade!
              </p>
            </div>

            <div className="bg-gray-100 p-4 md:p-6 rounded-xl border-2 border-gray-300">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">📦 Especificações Técnicas</h4>
              <ul className="space-y-2 text-sm md:text-lg">
                <li><strong>Conteúdo:</strong> 01 Tabuleiro e 36 Cartas</li>
                <li><strong>Dimensões da embalagem:</strong> 26x05x26cm (AxLxC)</li>
                <li><strong>Material:</strong> Plástico</li>
                <li><strong>Código do fabricante:</strong> BR1969</li>
                <li><strong>Peso aproximado:</strong> 0.340kg</li>
                <li><strong>Alimentação:</strong> 02 Pilhas AA 1.5V</li>
                <li><strong>Idade recomendada:</strong> A partir de 05 anos</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-white text-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-xl md:text-2xl hover:bg-gray-200 transition-colors shadow-lg z-10"
            >
              ×
            </button>
            <img
              src={images[modalImage]}
              alt="Visualização ampliada"
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex justify-center space-x-2 md:space-x-3 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImage(idx);
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${modalImage === idx ? 'bg-white' : 'bg-gray-500'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-6 md:py-8 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Dzn KiDS</h3>
          <p className="text-base md:text-lg">O melhor em brinquedos e diversão para crianças! 🎈</p>
          <p className="mt-3 md:mt-4 text-xs md:text-sm">© 2026 Dzn KiDS - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default DznKidsStore;