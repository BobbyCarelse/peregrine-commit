#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const BASE_URL = process.env.STORYBOOK_URL ?? 'http://localhost:6006';

async function listStories() {
  const res = await fetch(`${BASE_URL}/index.json`);
  if (!res.ok) throw new Error(`GET /index.json -> ${res.status}`);
  const { entries } = await res.json();
  for (const { id, title, name } of Object.values(entries)) {
    console.log(`${id}\t${title} > ${name}`);
  }
}

async function screenshotStory(storyId, outPath = `screenshots/${storyId}.png`) {
  if (!storyId) throw new Error('usage: driver.mjs screenshot <story-id> [out.png]');
  await mkdir(dirname(outPath), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push(String(err)));

  await page.goto(`${BASE_URL}/iframe.html?id=${storyId}&viewMode=story`, {
    waitUntil: 'load',
  });
  await page.waitForSelector('#storybook-root', { state: 'attached', timeout: 15000 });
  // storybook-root exists before React commits into it; give the story a moment to paint.
  await page.waitForSelector('#storybook-root *', { state: 'attached', timeout: 15000 });
  await page.screenshot({ path: outPath });
  await browser.close();

  console.log(`screenshot -> ${outPath}`);
  if (consoleErrors.length) {
    console.log('console errors:');
    for (const e of consoleErrors) console.log(`  ${e}`);
  } else {
    console.log('console errors: none');
  }
}

const [, , cmd, ...args] = process.argv;

try {
  if (cmd === 'list') {
    await listStories();
  } else if (cmd === 'screenshot') {
    await screenshotStory(...args);
  } else {
    console.error('usage: driver.mjs <list|screenshot> [args]');
    process.exit(1);
  }
} catch (err) {
  console.error('FAILED', err.message ?? err);
  process.exit(1);
}
