const { chromium } = require("playwright-core");
const fs = require("fs");
const path = require("path");
const output = path.resolve("../evidence/v1.1");
(async () => {
  const b = await chromium.launch();
  for (const [label, url] of [
    ["before", "http://127.0.0.1:4183"],
    ["after", "http://127.0.0.1:4173"],
  ])
    for (const width of [320, 390, 768, 1440]) {
      const c = await b.newContext({
        viewport: { width, height: 900 },
        reducedMotion: "reduce",
      });
      const p = await c.newPage();
      await p.goto(url, { waitUntil: "networkidle" });
      await p.evaluate(() => document.fonts.ready);
      await p.screenshot({
        path: path.join(output, `${label}-${width}-hero.png`),
      });
      for (const [name, id] of [
        ["portfolio", "#obras"],
        ["process", "#proceso"],
      ]) {
        await p.locator(id).scrollIntoViewIfNeeded();
        await p.evaluate(
          (id) =>
            scrollTo(
              0,
              document.querySelector(id).getBoundingClientRect().top +
                scrollY -
                90,
            ),
          id,
        );
        if (label === "after" && width < 761 && name === "process") {
          await p.locator(".mobile-project-link").waitFor({ state: "visible" });
        }
        await p.screenshot({
          path: path.join(output, `${label}-${width}-${name}.png`),
        });
      }
      if (label === "after" && width < 761) {
        await p
          .getByRole("button", { name: "Ver las seis obras", exact: true })
          .click();
        await p.locator("#obras").screenshot({
          path: path.join(output, `after-${width}-expanded.png`),
        });
      }
      await c.close();
      console.log(label, width);
    }
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
