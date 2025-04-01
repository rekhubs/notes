hi


### Concepts

* Document
* Operation - js instead of sql
* Stages


https://www.mongodb.com/docs/manual/introduction/

### Do

The advantages of using documents are:

* Documents correspond to native data types in many programming languages.
* Embedded documents and arrays reduce need for expensive joins.
* Dynamic schema supports fluent polymorphism.


On-Demand Materialized Views

MongoDB provides two different view types: standard views and on-demand materialized views. Both view types return the results from an aggregation pipeline.
* Standard views are computed when you read the view, and are not stored to disk.
* On-demand materialized views are stored on and read from disk. They use a $merge or $out stage to update the saved data.
