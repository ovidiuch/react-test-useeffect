import React, { useEffect } from "react";
import { create as render } from "react-test-renderer";

it("calls effect", () => {
  return new Promise(resolve => {
    render(<EffectfulComponent effect={resolve} />);
  });
});

function EffectfulComponent({ effect }) {
  useEffect(effect);

  return null;
}
