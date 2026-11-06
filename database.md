

## PostgreSQL 18 Chapter 14. Performance Tips

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

* Simple sequential scan plan
* Estimated start-up cost. This is the time expended before the output phase can begin, e.g., time to do the sorting in a sort node.
* Estimated total cost. This is stated on the assumption that the plan node is run to completion, i.e., all available rows are retrieved.
* Estimated number of rows output by this plan node. Again, the node is assumed to be run to completion.
* Estimated average width of rows output by this plan node (in bytes).

**Unit: costs in units of disk page fetches - `seq_page_cost` set to 1.0**

`xxx rows`: number emitted by nodes - not exact number of rows scanned, closer to returned/affected rows - e.g. when filtering by `WHERE`
