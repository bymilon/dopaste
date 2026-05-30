DROP TABLE IF EXISTS pastes;

CREATE TABLE pastes (
    id TEXT PRIMARY KEY,
    paste TEXT NOT NULL,
    created_at TEXT NOT NULL
);
