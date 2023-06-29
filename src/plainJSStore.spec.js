import {
  initialSimpleCounterStoreState,
  plainJSCounterStore,
} from "./plainJSStore.js";
import { it, describe, beforeEach } from "vitest";

describe("plainJSStore", () => {
  beforeEach(() => {
    plainJSCounterStore.setState(initialSimpleCounterStoreState);
  });
  describe("increment", () => {
    it("should well increment ", () => {});
  });
  describe("decrement", () => {
    it("should well decrement ", () => {});
  });
});
