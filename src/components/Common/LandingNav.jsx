import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  background: rgba(11, 13, 20, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #fff 0%, #a0a3bd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  
  span {
    color: var(--primary);
    -webkit-text-fill-color: initial;
    background: none;
  }
`;

const LoginBtn = styled.button`
  background: ${props => props.$isDashboard ? 'rgba(108, 93, 211, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.$isDashboard ? 'rgba(108, 93, 211, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.$isDashboard ? '#6c5dd3' : '#fff'};
  padding: 0.6rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$isDashboard ? 'rgba(108, 93, 211, 0.2)' : '#fff'};
    color: ${props => props.$isDashboard ? '#6c5dd3' : '#000'};
    transform: translateY(-2px);
  }
`;

const NavLink = styled.a`
  color: #a0a3bd;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
  text-decoration: none;
  
  &:hover {
    color: #fff;
  }
`;

const LandingNav = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleHomeClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <Nav>
      <Container>
        <Logo onClick={handleHomeClick}>LAWYER<span>.AI</span></Logo>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <NavLink onClick={() => navigate('/features')}>Features</NavLink>
            <NavLink onClick={() => navigate('/about')}>About</NavLink>

            <NavLink onClick={() => navigate('/contact')}>Contact</NavLink>
          </div>
          {user ? (
            <LoginBtn $isDashboard onClick={() => navigate('/dashboard')}>
              <LayoutDashboard size={18} />
              Dashboard
            </LoginBtn>
          ) : (
            <LoginBtn onClick={() => navigate('/auth')}>
              Get Started
              <ChevronRight size={18} />
            </LoginBtn>
          )}
        </div>
      </Container>
    </Nav>
  );
};

export default LandingNav;
