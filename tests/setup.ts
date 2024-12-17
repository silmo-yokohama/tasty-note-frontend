// tests/setup.ts
import { afterEach, beforeEach, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

beforeEach(() => {
  setActivePinia(createPinia());
});

afterEach(() => {
  vi.clearAllMocks();
});
