-- Migration: Create pastes table
CREATE TABLE IF NOT EXISTS pastes (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'plaintext',
  created_at INTEGER NOT NULL
);
