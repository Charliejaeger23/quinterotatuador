// Run against an isolated static review server. Never sends a WhatsApp message.
const { chromium, firefox, webkit } = require("playwright-core");
const { default: AxeBuilder } = require("@axe-core/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.QT_REVIEW_URL || "http://127.0.0.1:4173";
const output = path.resolve(__dirname, "../../evidence/v1.1");
fs.mkdirSync(output, { recursive: true });

(async () => {
  const report = { base, checks: [], errors: [], accessibility: [] };
  for (const [engine, launcher] of Object.entries({
    chromium,
    firefox,
    webkit,
  })) {
    const browser = await launcher.launch({ headless: true });
    try {
      for (const width of engine === "chromium"
        ? [1440, 390, 320, 768]
        : [390]) {
        console.log("CHECK", engine, width);
        const context = await browser.newContext({
          viewport: { width, height: width > 1000 ? 1000 : 844 },
          reducedMotion: "reduce",
        });
        const page = await context.newPage();
        page.on("pageerror", (err) =>
          report.errors.push(engine + ": " + err.message),
        );
        page.on("response", (res) => {
          if (res.status() >= 400 && res.url().startsWith(base))
            report.errors.push(res.status() + " " + res.url());
        });
        await page.goto(base, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator("h1").count(), 1);
        assert.equal(await page.locator(".portfolio-grid figure").count(), 6);
        assert.equal(await page.locator("form").count(), 0);
        const sections = await page
          .locator("main > section")
          .evaluateAll((els) => els.map((el) => el.id));
        assert.deepEqual(sections, [
          "inicio",
          "obras",
          "proceso",
          "artista",
          "preguntas",
          "solicitar",
        ]);
        assert.equal(
          await page.locator('meta[name="robots"]').getAttribute("content"),
          "noindex, nofollow",
        );
        const anchors = await page
          .locator('a[href^="#"]')
          .evaluateAll((els) => els.map((el) => el.getAttribute("href")));
        for (const anchor of anchors)
          assert.equal(await page.locator(anchor).count(), 1, anchor);
        const links = await page
          .locator('a[href*="wa.me"]')
          .evaluateAll((els) => els.map((el) => el.href));
        assert.equal(links.length, 4);
        assert.equal(
          await page.locator(".portfolio-grid figure:visible").count(),
          width < 761 ? 3 : 6,
        );
        assert.match(
          await page.locator(".portfolio-grid figure").first().innerText(),
          /Retrato, aves y flores/,
        );
        for (const link of links) {
          const url = new URL(link);
          assert.equal(url.pathname, "/584129583666");
          assert.match(url.searchParams.get("text"), /quinterotatuador\.com/);
        }
        assert(
          !/584244567890|wa\.me\/NUMERO|instagram\.com\/USUARIO/.test(
            await page.content(),
          ),
        );
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          engine + " overflow at " + width,
        );
        if (width < 761) {
          const menu = page.locator(".menu-toggle");
          await menu.click();
          assert.equal(await menu.getAttribute("aria-expanded"), "true");
          await page
            .getByRole("navigation")
            .getByRole("link", { name: "Obras", exact: true })
            .click();
          assert.equal(await menu.getAttribute("aria-expanded"), "false");
          assert.match(page.url(), /#obras$/);
        }
        if (width < 761) {
          const expand = page.getByRole("button", {
            name: "Ver las seis obras",
            exact: true,
          });
          await expand.click();
          assert.equal(
            await page.locator(".portfolio-grid figure:visible").count(),
            6,
          );
          await page
            .getByRole("button", { name: "Mostrar tres obras", exact: true })
            .click();
          assert.equal(
            await page.locator(".portfolio-grid figure:visible").count(),
            3,
          );
          await page.locator("#proceso").scrollIntoViewIfNeeded();
          await page
            .locator(".mobile-project-link")
            .waitFor({ state: "visible" });
          const cta = await page.locator(".mobile-project-link").boundingBox();
          const header = await page.locator(".site-header").boundingBox();
          assert(
            cta.y >= header.y && cta.y + cta.height <= header.y + header.height,
          );
          await page.locator(".menu-toggle").click();
          await page
            .locator(".mobile-project-link")
            .waitFor({ state: "hidden" });
          await page.keyboard.press("Escape");
        }
        const first = page.getByRole("button", {
          name: "Ampliar Retrato, aves y flores",
          exact: true,
        });
        await first.click();
        await page.getByRole("dialog").waitFor({ state: "visible" });
        if (width < 761)
          await page
            .locator(".mobile-project-link")
            .waitFor({ state: "hidden" });
        if (engine === "chromium") {
          await page.keyboard.press("ArrowRight");
          assert.match(
            await page.locator(".lightbox-top").innerText(),
            /2 \/ 6/,
          );
          await page.keyboard.press("ArrowLeft");
          assert.match(
            await page.locator(".lightbox-top").innerText(),
            /1 \/ 6/,
          );
          await page.keyboard.press("Shift+Tab");
          assert(
            await page
              .locator("dialog")
              .evaluate((el) => el.contains(document.activeElement)),
            "focus trap",
          );
        }
        await page
          .getByRole("button", { name: "Obra siguiente", exact: true })
          .click();
        assert.match(await page.locator(".lightbox-top").innerText(), /2 \/ 6/);
        await page
          .getByRole("button", { name: "Cerrar imagen ampliada" })
          .click();
        await page.waitForFunction(() => document.body.style.overflow === "");
        assert(await first.evaluate((el) => document.activeElement === el));
        assert.equal(
          await page.evaluate(() => document.body.style.overflow),
          "",
        );
        await first.click();
        await page.keyboard.press("Escape");
        await page.getByRole("dialog").waitFor({ state: "hidden" });
        const faq = page.locator("summary").first();
        await faq.click();
        assert(
          (await page.locator("details").first().getAttribute("open")) !== null,
        );
        await faq.click();
        for (const image of await page.locator("main img:visible").all()) {
          await image.scrollIntoViewIfNeeded();
          await image.evaluate((img) => img.decode());
          assert(await image.evaluate((img) => img.naturalWidth > 0));
        }
        await page.evaluate(() => scrollTo(0, 0));
        if (width < 761)
          await page
            .locator(".mobile-project-link")
            .waitFor({ state: "hidden" });
        if (engine === "chromium" && [390, 1440].includes(width)) {
          const size = width === 390 ? "mobile" : "desktop";
          await page.screenshot({
            path: path.join(output, size + "-hero.png"),
          });
          await page.screenshot({
            path: path.join(output, size + "-full.png"),
            fullPage: true,
          });
          const axe = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze();
          report.accessibility.push({ width, violations: axe.violations });
          assert.equal(
            axe.violations.length,
            0,
            JSON.stringify(
              axe.violations.map((v) => ({
                id: v.id,
                nodes: v.nodes.map((n) => n.target),
              })),
            ),
          );
        }
        report.checks.push({
          engine,
          width,
          status: "PASS",
          sections: sections.length,
          works: 6,
          whatsappLinks: links.length,
        });
        await context.close();
      }
    } finally {
      await browser.close();
    }
  }
  fs.writeFileSync(
    path.join(output, "browser-verification.json"),
    JSON.stringify(report, null, 2),
  );
  assert.equal(report.errors.length, 0, JSON.stringify(report.errors));
  console.log(JSON.stringify(report, null, 2));
})().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
