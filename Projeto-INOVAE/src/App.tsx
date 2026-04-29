/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from "motion/react";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  MapPin, 
  Menu, 
  Phone, 
  Plus, 
  Search, 
  User, 
  Eye, 
  EyeOff,
  Smile
} from "lucide-react";
import { useState } from "react";

type Screen = "skin-home" | "login" | "safety-home" | "map" | "contacts" | "profile" | "calling";

export default function App() {
  const [screen, setScreen] = useState<Screen>("skin-home");
  const [showPassword, setShowPassword] = useState(false);

  const SkinHERHome = () => (
    <div id="skin-home" className="min-h-full bg-white flex flex-col">
      <header className="bg-[#e2f0d9] py-4 px-6 flex justify-between items-center shadow-sm">
        <Home className="text-gray-600 cursor-pointer" onClick={() => setScreen("skin-home")} />
        <div className="flex items-center gap-2">
          <Smile className="text-[#4a7c44]" />
          <span className="text-2xl font-serif italic font-bold text-[#4a7c44]">SkinHER</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="bg-white px-4 py-1 rounded text-sm border border-gray-200"
            onClick={() => setScreen("login")}
          >
            Login
          </button>
          <Menu className="text-gray-700" />
        </div>
      </header>

      <div className="p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 px-4 overflow-x-auto my-4">
        <CategoryItem label="Limpeza" image="/icon_wash.jpeg" fallbackColor="bg-blue-50" icon="🧴" />
        <CategoryItem label="Sérum" image="/icon_serum.jpeg" fallbackColor="bg-purple-50" icon="💧" />
        <CategoryItem label="Hidratação" image="/icon_cream.jpeg" fallbackColor="bg-pink-50" icon="✨" />
        <CategoryItem label="Protetor" image="/icon_sun.jpeg" fallbackColor="bg-yellow-50" icon="☀️" />
        <CategoryItem label="Máscara" image="/icon_mask.jpeg" fallbackColor="bg-green-50" icon="🎭" />
        <CategoryItem label="Olhos" image="/icon_eye.jpeg" fallbackColor="bg-indigo-50" icon="👁️" />
      </div>

      <div className="p-4">
        <div className="bg-[#cfe0c9] aspect-[3/1] rounded-lg flex items-center justify-center overflow-hidden relative group">
          <img 
            src="/banner.png" 
            className="w-full h-full object-cover absolute inset-0 z-10" 
            alt="Glow Up Promo" 
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="text-center z-0">
             <span className="text-[#4a7c44] font-serif italic text-2xl font-bold block mb-1">GLOW UP na sua pele</span>
             <span className="bg-[#4a7c44] text-white px-3 py-1 rounded-full text-xl font-bold">61% OFF</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <div className="bg-[#f0f0f0] px-6 py-1 rounded-full px-8">
          <span className="text-sm font-medium text-gray-600">Tutoriais</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 px-4 pb-8">
        <TutorialCard src="/card1.png" label="Skincare Garnier" />
        <TutorialCard src="/card2.png" label="Serum Wepink" />
        <TutorialCard src="/card3.png" label="Simple Organic" />
      </div>
    </div>
  );

  const TutorialCard = ({ src, label }: { src: string, label: string }) => (
    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative border border-gray-100 shadow-sm">
      <img src={src} className="w-full h-full object-cover absolute inset-0 z-10" alt={label} onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }} />
      <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );

  const CategoryItem = ({ label, image, fallbackColor, icon }: { label: string, image: string, fallbackColor: string, icon: string }) => (
    <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
      <div className={`w-20 h-20 ${fallbackColor} rounded-full flex items-center justify-center overflow-hidden p-3 transition-transform hover:scale-105 relative`}>
        <img src={image} className="w-full h-full object-contain absolute inset-0 z-10 p-3" alt={label} onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }} />
        <span className="text-2xl z-0">{icon}</span>
      </div>
      <span className="text-xs font-medium text-gray-600">{label}</span>
    </div>
  );

  const LoginScreen = () => (
    <div className="min-h-full bg-[#cfe0c9] flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-3xl mb-8">Login</h2>
        <div className="w-full mb-6">
          <label className="block text-sm mb-1">Senha</label>
          <input 
            type="password" 
            className="w-full bg-gray-100 rounded p-2 outline-none" 
          />
        </div>
        <button 
          className="w-full bg-[#4a7c44] text-white py-2 rounded hover:opacity-90"
          onClick={() => setScreen("safety-home")}
        >
          Entrar
        </button>
      </div>
    </div>
  );

  const SafetyHome = () => (
    <div className="min-h-full bg-white flex flex-col">
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <Home className="cursor-pointer text-gray-600" onClick={() => setScreen("skin-home")} />
        <h1 className="text-xl font-bold italic">SAVEHer</h1>
        <User className="cursor-pointer text-gray-600" onClick={() => setScreen("profile")} />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-8 gap-16">
        <button 
          className="bg-red-600 text-white text-2xl font-bold py-10 px-16 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          onClick={() => setScreen("calling")}
        >
          EMERGÊNCIA
        </button>

        <div className="flex gap-16">
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => setScreen("map")}>
            <MapPin size={48} />
            <span className="font-bold">Mapa</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => setScreen("contacts")}>
            <Phone size={48} />
            <span className="font-bold text-center">Contatos</span>
          </div>
        </div>
      </div>
    </div>
  );

  const MapRiskZones = () => (
    <div className="min-h-full bg-white flex flex-col">
      <header className="bg-gray-100 p-4 flex items-center gap-4 shadow-sm">
        <ArrowLeft className="cursor-pointer text-gray-600" onClick={() => setScreen("safety-home")} />
        <h2 className="text-lg font-bold text-gray-700">Mapa das zonas de risco</h2>
      </header>
      <div className="flex-1 p-6">
        <div className="w-full aspect-video bg-[#f8f9fa] rounded-2xl flex items-center justify-center overflow-hidden border-2 border-gray-100 relative shadow-inner">
          <img 
            src="/map.jpg" 
            className="w-full h-full object-cover absolute inset-0 z-10" 
            alt="Safety Map" 
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col items-center gap-4 opacity-30 z-0">
             <MapPin size={64} className="text-gray-400" />
             <span className="text-xl font-bold text-gray-400">Recife Metropolitano</span>
          </div>
        </div>
        <div className="mt-12 space-y-6 max-w-sm mx-auto">
          <LegendItem color="bg-red-600" label="Perigo - Alta Ocorrência" />
          <LegendItem color="bg-yellow-500" label="Parcial - Atenção" />
          <LegendItem color="bg-green-500" label="Seguro - Recomendado" />
        </div>
      </div>
    </div>
  );

  const LegendItem = ({ color, label }: { color: string, label: string }) => (
    <div className="flex items-center gap-4">
      <div className={`${color} w-8 h-8 rounded-full border-2 border-white shadow`}></div>
      <span className="text-lg font-medium">{label}</span>
    </div>
  );

  const EmergencyContacts = () => (
    <div className="min-h-full bg-white flex flex-col">
      <header className="bg-gray-100 p-4 flex items-center gap-4">
        <ArrowLeft className="cursor-pointer" onClick={() => setScreen("safety-home")} />
        <h2 className="text-lg font-bold">Contatos de emergência</h2>
      </header>
      <div className="p-8 space-y-6">
        <ContactItem label="Mãe" phone="819267378" />
        <ContactItem label="Pai" phone="81927278" />
        <ContactItem label="Irmã" phone="81926872" />
        <div className="flex items-center gap-4 cursor-pointer p-4 hover:bg-gray-50 rounded">
          <Plus />
          <span className="font-bold">Adicionar</span>
        </div>
      </div>
    </div>
  );

  const ContactItem = ({ label, phone }: { label: string, phone: string }) => (
    <div className="flex items-center gap-4">
      <User size={32} />
      <div>
        <div className="text-sm font-bold">{label}</div>
        <div className="text-lg">{phone}</div>
      </div>
    </div>
  );

  const Profile = () => (
    <div className="min-h-full bg-white flex flex-col">
      <header className="bg-gray-100 p-4 flex items-center gap-4">
        <ArrowLeft className="cursor-pointer" onClick={() => setScreen("safety-home")} />
        <h2 className="text-lg font-bold">Conta</h2>
      </header>
      <div className="p-8 flex flex-col items-center gap-8">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
          <User size={64} />
        </div>
        <div className="w-full space-y-4">
          <ProfileField label="Nome" value="Rayane Silva" />
          <ProfileField label="E-mail" value="rayilv@gmail.com" />
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              readOnly 
              value="********" 
              className="w-full border-b p-2"
            />
            <button className="absolute right-2 top-2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfileField = ({ label, value }: { label: string, value: string }) => (
    <div className="border-b py-2">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );

  const CallingScreen = () => (
    <div className="min-h-full bg-gray-900 flex flex-col items-center justify-around py-20">
      <h2 className="text-white text-4xl font-bold tracking-widest">EMERGÊNCIA</h2>
      <button 
        className="bg-red-600 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl"
        onClick={() => setScreen("safety-home")}
      >
        <Phone className="text-white w-16 h-16 rotate-[135deg]" />
      </button>
    </div>
  );

  return (
    <div className="w-full h-screen bg-white flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full overflow-y-auto"
        >
          {screen === "skin-home" && <SkinHERHome />}
          {screen === "login" && <LoginScreen />}
          {screen === "safety-home" && <SafetyHome />}
          {screen === "map" && <MapRiskZones />}
          {screen === "contacts" && <EmergencyContacts />}
          {screen === "profile" && <Profile />}
          {screen === "calling" && <CallingScreen />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
