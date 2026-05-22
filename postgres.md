
### Explain <-- perf

https://www.postgresql.org/docs/current/performance-tips.html

Returning to our example:

`EXPLAIN SELECT * FROM tenk1;`

```
                         QUERY PLAN
-------------------------------------------------------------
 Seq Scan on tenk1  (cost=0.00..445.00 rows=10000 width=244)
```

These numbers are derived very straightforwardly. If you do:

`SELECT relpages, reltuples FROM pg_class WHERE relname = 'tenk1';`

you will find that tenk1 has 345 disk pages and 10000 rows. The estimated cost is computed as (disk pages read * seq_page_cost) + (rows scanned * cpu_tuple_cost). By default, seq_page_cost is 1.0 and cpu_tuple_cost is 0.01, so the estimated cost is (345 * 1.0) + (10000 * 0.01) = 445.
