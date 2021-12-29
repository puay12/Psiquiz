import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authenticated } from "../../middleware/Authenticated";
import { Guest } from "../../middleware/Guest";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { UpdateAcc } from "../pages/UpdateAcc";
import { PilihTes } from "../pages/PilihTes";
import { TesTeks } from "../pages/TesTeks";
import { TesGambar } from "../pages/TesGambar";
import { RulesTeks } from "../pages/RulesTeks";
import { RulesGambar } from "../pages/RulesGambar";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Guest>
              <Login />
            </Guest>
          }
        />
        <Route
          path="/register"
          element={
            <Guest>
              <Register />
            </Guest>
          }
        />
        <Route
          path="/update"
          element={
            <Authenticated>
              <UpdateAcc />
            </Authenticated>
          }
        />
        <Route
          path="/pilih-tes"
          element={
            <Authenticated>
              <PilihTes />
            </Authenticated>
          }
        />
        <Route
          path="/pilih-tes/rules-tks"
          element={
            <Authenticated>
              <RulesTeks />
            </Authenticated>
          }
        />
        <Route
          path="/pilih-tes/rules-gmbr"
          element={
            <Authenticated>
              <RulesGambar />
            </Authenticated>
          }
        />
        <Route
          path="/pilih-tes/rules-tks/tes1"
          element={
            <Authenticated>
              <TesTeks />
            </Authenticated>
          }
        />

        <Route
          path="/pilih-tes/rules-tks/tes2"
          element={
            <Authenticated>
              <TesGambar />
            </Authenticated>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
