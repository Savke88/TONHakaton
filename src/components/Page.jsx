import { useNavigate } from 'react-router-dom';
import { backButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export function Page({ children, back = true }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      backButton.show();
      return backButton.onClick(() => {
        navigate(-1);
      });
    }
    backButton.hide();
  }, [back]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}