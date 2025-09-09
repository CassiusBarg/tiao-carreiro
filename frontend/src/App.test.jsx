import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Mock da API
jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        top5: [{ id: 1, title: "Música 1", url: "http://youtube.com/1" }],
        others: { data: [], last_page: 1 }
      }
    })
  ),
}));

test("renderiza título do Top 5", async () => {
  render(<App />);
  const title = await screen.findByText(/Top 5 Tião Carreiro/i);
  expect(title).toBeInTheDocument();
});

test("mostra música mockada", async () => {
  render(<App />);
  const song = await screen.findByText("Música 1");
  expect(song).toBeInTheDocument();
});
