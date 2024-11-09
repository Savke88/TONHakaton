import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sadrzaj } from "./Sadrzaj/Sadrzaj";

export function Page({ children, back = true, style }) {
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
      <Sadrzaj />
      <div style={style}>{children}</div>
      <Footer />
    </>
  );
}
