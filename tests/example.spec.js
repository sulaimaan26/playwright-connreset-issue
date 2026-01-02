// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ request }) => {
  const url = `http://localhost:3000`;
  let res = await request.get(url)
  expect(res.status()).toBe(200);
});