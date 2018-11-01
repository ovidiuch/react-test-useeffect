import React, { useEffect } from "react";
import { render } from "react-dom";

it("calls effect", () => {
  const container = document.body.appendChild(document.createElement("div"));

  return new Promise(resolve => {
    render(<EffectfulComponent effect={resolve} />, container);
  });
});

function EffectfulComponent({ effect }) {
  useEffect(effect);

  return null;
}
