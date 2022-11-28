import React from "react";
import { atom, selector } from "recoil";

export const isEditCard = atom({
  key: "isEditCard",
  default: false,
});

export const editCardId = atom({
  key: "editCardId",
  default: 0,
});
