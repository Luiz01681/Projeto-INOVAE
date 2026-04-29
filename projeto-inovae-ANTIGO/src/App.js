import './App.css';
import { useState } from 'react';

import Arrow from './components/arrow';
import LoginButton from './components/login';
import MenuIcon from './components/menu';
import CategoryIcon from './components/centerIcons';
import Input from './components/input';

function HomeIcon({ onClick }) {
  return <div className="home-icon" onClick={onClick}></div>;
}

function App() {
  const [screen, setScreen] = useState("home");
  const [showPassword, setShowPassword] = useState(false);

  /* ================= HOME ================= */
  const Home = () => (
    <>
      <header className="topo">
        <div className="menu-esquerda">
          <HomeIcon onClick={() => setScreen("home")} />
        </div>
        <div className="logo">
          <h1>Skin<span>HER</span></h1>
        </div>
        <div className="menu-direita">
          <button className="login-btn" onClick={() => setScreen("login")}>Login</button>
          <MenuIcon />
        </div>
      </header>
      <section className="busca">
        <Input placeholder="Search" />
      </section>
      <section className="categorias">
        <Arrow direction="left" />
        <div className="icones">
          {/* Update with your actual icon paths and labels as needed */}
          <CategoryIcon image="/Icons/WomanWashingFace.jpeg" label="Limpeza" />
          <CategoryIcon image="/Icons/Cream.jpeg" label="Hidratação" />
          <CategoryIcon image="/Icons/Sunscreen.jpeg" label="Protetor" />
          <CategoryIcon image="/Icons/MakeupDroplet.jpeg" label="Sérum" />
          <CategoryIcon image="/Icons/WomanWithMakeupMask.jpeg" label="Máscara" />
          <CategoryIcon image="/Icons/EyeCream?.jpeg" label="Olhos" />
        </div>
        <Arrow direction="right" />
      </section>
      <section className="banner">
        <Arrow direction="left" />
        <div className="banner-img">
          <img src="/banner.jpg" alt="" />
        </div>
        <Arrow direction="right" />
      </section>
      <section className="titulo">
        <h2>Tutoriais</h2>
      </section>
      <section className="cards">
        <div className="card"><img src="/card1.jpg" /></div>
        <div className="card"><img src="/card2.jpg" /></div>
        <div className="card"><img src="/card3.jpg" /></div>
      </section>
    </>
  );

  /* ================= LOGIN ================= */
  const Login = () => (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        <label>Senha</label>
        <input type="password" />

        <button onClick={() => setScreen("emergency")}>
          Entrar
        </button>
      </div>
    </div>
  );

  /* ================= EMERGENCY ================= */
  const Emergency = () => (
    <div className="emergency-page">
      <header className="topo saveher-topo">
        <HomeIcon onClick={() => setScreen("home")} />
        <h1 className="logo-text">SAVE<span>Her</span></h1>
        <div 
          className="profile-circle"
          onClick={() => setScreen("account")}
        ></div>
      </header>
      <div className="emergency-content">
        <button className="btn-emergency">EMERGÊNCIA</button>
        <div className="emergency-options">
          <div className="option" onClick={() => setScreen("map")}> 
            <span className="material-icons">map</span>
            <p>Mapa</p>
          </div>
          <div className="option" onClick={() => setScreen("contacts")}> 
            <span className="material-icons">contact_phone</span>
            <p>Contato de emergência</p>
          </div>
        </div>
      </div>
    </div>
  );

  /* ================= ACCOUNT ================= */
  const Account = () => (
    <div className="page">
      <header className="topo saveher-topo">
        <Arrow direction="left" onClick={() => setScreen("emergency")} />
        <h2>Conta</h2>
        <HomeIcon onClick={() => setScreen("home")} />
      </header>
      <div className="account-box">
        <div className="avatar"></div>
        <label>Nome</label>
        <input value="Ana Melo" readOnly />
        <label>E-mail</label>
        <input value="ana.caramelo04@gmail.com" readOnly />
        <label>Senha</label>
        <div className="password-field">
          <input 
            type={showPassword ? "text" : "password"} 
            value="mylittlepony" 
            readOnly 
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            <span className="material-icons">visibility</span>
          </span>
        </div>
        <p className="edit-link">+ Editar contatos de emergência</p>
      </div>
    </div>
  );

  /* ================= CONTACTS ================= */
  const Contacts = () => (
    <div className="page">
      <header className="topo saveher-topo">
        <Arrow direction="left" onClick={() => setScreen("emergency")} />
        <h2>Contato de emergência</h2>
        <HomeIcon onClick={() => setScreen("home")} />
      </header>
      <div className="contacts">
        <p><span className="material-icons">person</span> Mãe - 819263778</p>
        <p><span className="material-icons">person</span> Pai - 81927278</p>
        <p><span className="material-icons">person</span> Irmã - 81926872</p>
        <p><span className="material-icons">add</span> Adicionar</p>
      </div>
    </div>
  );

  /* ================= MAP ================= */
  const Map = () => (
    <div className="page" style={{position: 'relative'}}>
      <header className="topo saveher-topo">
        <HomeIcon onClick={() => setScreen("home")} />
        <h2>Mapa</h2>
        <div className="profile-circle" onClick={() => setScreen("account")}></div>
      </header>
      <div className="map-box">
        <img src="/map.jpg" alt="mapa" />
        <div className="map-legend">
          <div className="legend-item"><span className="legend-color legend-danger"></span> Perigo</div>
          <div className="legend-item"><span className="legend-color legend-partial"></span> Parcial</div>
          <div className="legend-item"><span className="legend-color legend-safe"></span> Seguro</div>
        </div>
      </div>
    </div>
  );

  /* ================= RENDER ================= */
  if (screen === "login") return <Login />;
  if (screen === "emergency") return <Emergency />;
  if (screen === "account") return <Account />;
  if (screen === "contacts") return <Contacts />;
  if (screen === "map") return <Map />;

  return <Home />;
}

export default App;