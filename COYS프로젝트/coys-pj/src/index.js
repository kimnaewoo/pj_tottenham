import "jquery-ui-dist/jquery-ui";

// 리액트 불러오기
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

// 페이지 공통 CSS
import "./css/common.css";

import { Layout } from "./layout/Layout";
import { Team } from "./modules/Team";
import { Sellshop } from "./modules/SellShop";
import { Contect } from "./modules/Contect";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Member } from "./pages/Member";
import { ItemArea } from "./pages/ItemArea";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="team" element={<Team />} />
          <Route path="shop" element={<Sellshop />} />
          <Route path="contact" element={<Contect />} />
          <Route path="login" element={<Login />} />
          <Route path="member" element={<Member />} />
          <Route path="itemarea" element={<ItemArea />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
