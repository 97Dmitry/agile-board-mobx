import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";
import { meStore } from "./store/me.store";

test("render MainLayout", () => {
  render(<App />);
  if (meStore.me?.id) {
    expect(screen.findByText("MainLayout"));
  } else {
    expect(screen.findByText("AuthorizationLayout"));
  }
});

test("render AuthorizationLayout", () => {
  render(<App />);
  if (meStore.me?.id) {
    expect(screen.findByText("MainLayout"));
  } else {
    expect(screen.findByText("AuthorizationLayout"));
  }
});
