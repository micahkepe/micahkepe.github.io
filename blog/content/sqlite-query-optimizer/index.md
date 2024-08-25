+++
title = "[10] A Deep Dive into SQLite's Query Optimizer"
date = 2024-08-25
draft = true
weight = 2

[taxonomies]
categories = ["programming"]
tags = ["databases", "sqlite", "query-optimizer"]
+++

I **love** databases, but they are still largely a magical black box to me, so in this post, I'm going to explore how SQLite's query optimizer works. We'll delve together into how the process of how SQL queries are parsed, optimized, and executed, in particular focusing on the optimization phase. By the end of this post, you'll have a better understanding of how SQLite's query optimizer works and how it can help you write more efficient queries.

<!-- more -->

{{ latex() }}

This past summer I got a lot of practice learning the ins and outs of SQLite as part of a project that I have been contributing to that we originally set up with a SQLite database. I've been working with SQLite for a while now, and I've come to appreciate its simplicity and ease of use.

## What Actually Happens When You Run a Query?

Regardless of the database engine you're using, when you run a query, the database engine goes through a series of steps to execute the query. These steps include:

1. **Writing**: The query is written and sent to the database engine.

2. **Parsing**: The query is parsed to ensure it is syntactically correct.

3. **Planning**: The query planner generates an execution plan for the query.

4. **Execution**: The query is actually executed and the results are returned.

Of course, while these steps are common to all database engines, the way they are implemented can vary significantly from one engine to another.

## SQLite's Approach to Query Optimization

Because SQLite is open source and has a small codebase, it’s relatively easy to understand how it works. The query optimizer in SQLite might seem like a modest engine at first glance, but under the hood, it's a sophisticated piece of software that makes smart decisions to ensure your queries run efficiently.

SQLite's query optimizer uses several different strategies to optimize query performance:

1. **Index Selection**: SQLite intelligently selects the best indexes to speed up data retrieval. It considers various factors, such as the columns in the `WHERE` clause and the order in which they appear.

2. **Join Ordering**: For queries that involve joins, SQLite tries to figure out the most efficient order to join the tables. It uses heuristics and statistics to make an educated guess that minimizes the computational cost.

3. **Subquery Flattening**: SQLite tries to flatten subqueries, meaning it attempts to merge subqueries into the main query whenever possible. This reduces the overhead of executing multiple queries separately.

4. **Covering Indexes**: If an index contains all the columns needed by the query, SQLite can retrieve the results directly from the index without accessing the actual table, significantly speeding up the query.

5. **Cost Estimation**: SQLite uses a cost-based query planner, which estimates the cost of different execution plans and chooses the one with the lowest estimated cost. The cost is generally a measure of how much disk I/O and CPU time will be consumed.

These strategies help SQLite balance efficiency and performance, making it an excellent choice for applications where lightweight and quick database operations are essential.

## Simple Example Query

Now that we have a basic understanding of how SQLite's query optimizer works, let's take a look at a simple example query and see how it's optimized.

Borrowing from the Rice University legend, Dr. Christopher Jermaine, let's say we have the following relational schema:

```sql
CREATE TABLE LIKES (
    DRINKER TEXT,
    BEER TEXT
);

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
```

For demonstration, I'll be using the [SQLite Online Compiler](https://sqliteonline.com/) to run the queries. Suppose we want to find all the beers that Ava likes with the following query:

```sql
SELECT BEER FROM LIKES WHERE DRINKER = 'Ava';
```

{{ responsive_image(src="run-simple.png", alt="Running the simple query") }}

As we can see, we get the expected results for this query. But how does SQLite's query optimizer actually execute this query?

### Analyzing the Query

The first step is to analyze the query to ensure it is syntactically correct. In this case, the query is simple and straightforward, so there are no issues with the syntax.

[ADD HERE]

## Complex Query Example: Getting to the Heart of the Optimizer

Now that we’ve covered the basics, let’s look at a more complicated query that gives SQLite’s optimizer something to chew on.

Imagine we have two tables, `DRINKER` and `BEER`, and we want to perform a query that joins them to find out which beers each drinker likes, sorted by their preference. The schema might look something like this:

```sql
CREATE TABLE DRINKER (
    ID INTEGER PRIMARY KEY,
    NAME TEXT
);

CREATE TABLE BEER (
    ID INTEGER PRIMARY KEY,
    NAME TEXT,
    TYPE TEXT
);

CREATE TABLE LIKES (
    DRINKER_ID INTEGER,
    BEER_ID INTEGER,
    PREFERENCE INTEGER, -- Lower numbers indicate higher preference
    FOREIGN KEY(DRINKER_ID) REFERENCES DRINKER(ID),
    FOREIGN KEY(BEER_ID) REFERENCES BEER(ID)
);

-- Example data
INSERT INTO DRINKER (ID, NAME) VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie');

INSERT INTO BEER (ID, NAME, TYPE) VALUES
(1, 'Budweiser', 'Lager'),
(2, 'Coors Light', 'Lager'),
(3, 'Miller Lite', 'Pilsner');

INSERT INTO LIKES (DRINKER_ID, BEER_ID, PREFERENCE) VALUES
(1, 1, 1),  -- Alice likes Budweiser the most
(1, 2, 2),  -- Alice likes Coors Light second
(2, 3, 1),  -- Bob prefers Miller Lite
(3, 1, 1),  -- Charlie likes Budweiser the most
(3, 2, 3),  -- Charlie's least favorite is Coors Light
(3, 3, 2);  -- Charlie likes Miller Lite second
```

Now, suppose we want to find out which beers each drinker likes, sorted by their preference:

```sql
SELECT DRINKER.NAME, BEER.NAME, LIKES.PREFERENCE
FROM DRINKER
JOIN LIKES ON DRINKER.ID = LIKES.DRINKER_ID
JOIN BEER ON BEER.ID = LIKES.BEER_ID
ORDER BY DRINKER.NAME, LIKES.PREFERENCE;
```

This query isn’t as simple as it looks. SQLite’s optimizer has to decide:

1. **Join Order**: Should it start with the `DRINKER`, `LIKES`, or `BEER` table?
2. **Index Usage**: Which indexes, if any, can be used to speed up the joins and the sorting?
3. **Sorting**: How should the results be sorted efficiently after the joins?

### Analyzing the Query Plan

By running `EXPLAIN QUERY PLAN` on this query, we can see how SQLite decides to execute it:

```sql
EXPLAIN QUERY PLAN
SELECT DRINKER.NAME, BEER.NAME, LIKES.PREFERENCE
FROM DRINKER
JOIN LIKES ON DRINKER.ID = LIKES.DRINKER_ID
JOIN BEER ON BEER.ID = LIKES.BEER_ID
ORDER BY DRINKER.NAME, LIKES.PREFERENCE;
```

You might see output like:

```
SCAN TABLE DRINKER
SEARCH TABLE LIKES USING INDEX idx_likes_drinker_id (DRINKER_ID=?)
SEARCH TABLE BEER USING INTEGER PRIMARY KEY (rowid=?)
```

This plan indicates that SQLite will:

1. **Scan the `DRINKER` table**: SQLite starts by scanning the `DRINKER` table. Since we’re ordering by `DRINKER.NAME`, starting here is logical.
2. **Search `LIKES` using an index**: SQLite then uses an index on `DRINKER_ID` in the `LIKES` table to quickly find all beers liked by each drinker.
3. **Search `BEER` by primary key**: Finally, SQLite looks up each beer by its primary key, which is efficient because it’s a direct lookup.

### Making the Query Even Faster

One way to improve this query’s performance is by ensuring the `LIKES` table has an index on `(DRINKER_ID, PREFERENCE)` to support the sort order directly:

```sql
CREATE INDEX idx_likes_drinker_pref ON LIKES(DRINKER_ID, PREFERENCE);
```

With this index, SQLite can more efficiently order the results by `PREFERENCE` for each `DRINKER` without needing additional sorting after the join.

## Tips for Writing Efficient Queries

By peeking under the hood at how SQL queries are executed, you can gain some intuition on why certain queries are faster than others. Here are a few tips to keep in mind:

1. **Index Your Foreign Keys**: Always create indexes on columns used in `JOIN` conditions. This speeds up the process of matching rows between tables.
2. **Use Covering Indexes**: If possible, create indexes that cover all the columns your query needs, so SQLite doesn’t need to access the main table at all.

3. **Write Selective WHERE Clauses**: If your `WHERE` clause can quickly eliminate rows from consideration, your query will run faster. The fewer rows SQLite has to process, the better.

4. **Avoid Redundant Sorting**: If you know your data is already sorted in the way you want, avoid using `ORDER BY`. It just adds unnecessary processing time.

5. **Optimize Subqueries**: Subqueries can sometimes be rewritten as joins, which might be more efficient, especially if the subquery’s result set is large.

6. **Understand the Query Planner**: Use tools like `EXPLAIN QUERY PLAN` to understand how SQLite executes your queries. Sometimes, a small change in the query structure can lead to a big performance improvement.

## References

- [The SQLite Query Optimizer Overview](https://www.sqlite.org/optoverview.html) \
- [SQLite Query Planner](https://www.sqlite.org/queryplanner.html) \
- [The Next-Generation Query Planner](https://www.sqlite.org/queryplanner-ng.html) \
- [Order of Execution of SQL Queries](https://www.geeksforgeeks.org/order-of-execution-of-sql-queries/)

{{ utterances() }}
