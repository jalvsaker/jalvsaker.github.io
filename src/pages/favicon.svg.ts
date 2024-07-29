import { icons } from "@iconify-json/mdi";

export function GET() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    ${icons.icons.console.body}
    <style>
      path { fill: #000; }
      @media (prefers-color-scheme: dark) {
        path { fill: #FFF; }
      }
    </style>
  </svg>
`;

  return new Response(svg, { headers: { "Content-type": "image/svg+xml" } });
}
