// @ts-check
import { test, expect } from '@playwright/test';

test('With retry', async ({ request }) => {
  const url = `http://localhost:3000`;
  let res = await request.get(url)
  expect(res.status()).toBe(200);
});

test('Without retry', async ({ request }) => {
  const url = `http://localhost:3000`;
  let res = await request.get(url, { maxRetries: 1 })
  expect(res.status()).toBe(200);
});
