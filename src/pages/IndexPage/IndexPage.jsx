import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";

import { Link } from "@/components/Link/Link.jsx";
import { Page } from "@/components/Page.jsx";

import tonSvg from "./ton.svg";
import { Header } from "@/components/Header/Header";
import { Searchbar } from "@/components/SearchBar/Searchbar";
import { Button } from "@/components/Button/Button";
import { Map } from "@/components/Map/Map";
import First from "@/components/Firs/First";
import Second from "@/components/Second/Second";

export function IndexPage() {
  return (
    <Page
      // back={false}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   marginTop: "100px",
      // }}
    >
    
      {/* <Map
        iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6qh61ytGqSAnhadCmTyOn9xCvoTtIcQAJw&s"
        style={{ height: "400px", width: "100%" }}
        markers={[
          { geocode: [44.7, 20.4], popUp: "Taksista 1" },
          { geocode: [44.82, 20.43], popUp: "Taksista 2" },
          { geocode: [44.67, 20.41], popUp: "Taksista 3" },
        ]}
      /> */}
      {/* <First />
      <Second /> */}
    </Page>
  );
}

{
  /*
  <List>
    <Section
      header="Features"
      footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
    >
      <Link to="/ton-connect">
        <Cell
          before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
          subtitle="Connect your TON wallet"
        >
          TON Connect
        </Cell>
      </Link>
    </Section>
    <Section
      header="Application Launch Data"
      footer="These pages help developer to learn more about current launch information"
    >
      <Link to="/init-data">
        <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
      </Link>
      <Link to="/launch-params">
        <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
      </Link>
      <Link to="/theme-params">
        <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
      </Link>
    </Section>
  </List>
  */
}
