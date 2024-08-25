CREATE TABLE LIKES (
    DRINKER TEXT,
    BEER TEXT
);

-- SIMPLE EXAMPLE

-- Example data
INSERT INTO LIKES (DRINKER, BEER) VALUES
('Ava', 'Bud Light'),
('Ava', 'Pabst'),
('Ava', 'Miller Lite'),
('Bob', 'Bud Light'),
('Bob', 'Coors Light'),
('Bob', 'Miller Lite'),
('Charlie', 'Bud Light'),
('Charlie', 'Coors Light'),
('Charlie', 'Miller Lite');

-- Find beers Ava drinks
SELECT BEER FROM LIKES WHERE DRINKER = 'Ava';

-- Explain query plan
EXPLAIN QUERY PLAN
SELECT BEER FROM LIKES WHERE DRINKER = 'Ava';

-- Create index on drinker and re-explain
CREATE INDEX idx_drinker ON LIKES(DRINKER);
EXPLAIN QUERY PLAN
SELECT BEER FROM LIKES WHERE DRINKER = 'Ava';

