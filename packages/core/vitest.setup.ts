import { JSDOM } from "jsdom";

const dom = new JSDOM("", { url: "http://localhost" });
(globalThis as any).window = dom.window;
(globalThis as any).document = dom.window.document;
(globalThis as any).HTMLElement = dom.window.HTMLElement;
