

## PostgresSQL 18 Chapter 14. Performance Tips

https://www.postgresql.org/docs/18/using-explain.html

### 14.1 Using EXPLAIN

Bottom level nodes - scan nodes from tables
  - Scans
    * Sequtial scan
    * Index scan
    * Bitmap index scan
  - "VALUE" clauses
  - Set-returning funcs in "FROM"

join, agg, sort, etc. - above 

```
EXPLAIN SELECT * FROM tenk1;

                         QUERY PLAN
-------------------------------------------------------------
 Seq Scan on tenk1  (cost=0.00..445.00 rows=10000 width=244)
```
