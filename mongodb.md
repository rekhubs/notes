hi


### Concepts

* Document
* JavaScript-based, thus objects and functions calls - e.g. `db.inventory.find( { qty: 20 } )`
* Nested multi-level objects, can directly operate on 1 object
* Array operations
* Operation - js instead of sql
* Aggregation pipeline of up to 1000 stages

https://www.mongodb.com/docs/manual/introduction/



### Do

The advantages of using documents are:

* Documents correspond to native data types in many programming languages.
* Embedded documents and arrays reduce need for expensive joins.
* Dynamic schema supports fluent polymorphism.


View

* read-only

Standard Views vs. On-Demand Materialized Views

MongoDB provides two different view types: standard views and on-demand materialized views. Both view types return the results from an aggregation pipeline.
* Standard views are computed when you read the view, and are not stored to disk.
* On-demand materialized views are stored on and read from disk. They use a $merge or $out stage to update the saved data.
* Indexes - Standard views use the indexes of the underlying collection. As a result, you cannot create, drop or re-build indexes on a standard view directly, nor get a list of indexes on the view. You can create indexes directly on on-demand materialized views because they are stored on disk.
* Performance - On-demand materialized views provide better read performance than standard views because they are read from disk instead of computed as part of the query. This performance benefit increases based on the complexity of the pipeline and size of the data being aggregated.

Good example of join in official doc - https://www.mongodb.com/docs/manual/core/views/join-collections-with-view/


### Changes - developing a new service

* Queries run on DB for support and dev different - js instead of sql
* Main dev of queries no change - if we use the Spring Data method naming convention on the Repository interface; while other approaches will be different - e.g. annotated method with (SQL -> js) - see below
* Model definition - Start right inserting objects into collection without defining vs. create table with column definitions

--



* CRUD - read - find() 
* Aggregation - stages of pipelines of manipulation 

* Query - how is


Spring data, find by property of a nested object

https://stackoverflow.com/questions/55579240/spring-data-find-by-property-of-a-nested-object/55579268

- Student
  - Grade

`public List<Student> findByStudent_Grades_ClassName(final String className);`

Another style - annotation with MongoDB-like js query:
```java
public interface CustomRepository extends MongoRepository<PracticeQuestion, String> {

    @Query(value = "{ 'userId' : ?0, 'questions.questionID' : ?1 }", fields = "{ 'questions.questionID' : 1 }")
    List<PracticeQuestion> findByUserIdAndQuestionsQuestionID(int userId, int questionID);

}
```

Another way - code criteria:
```java
 Criteria.where("users")
        .elemMatch(Criteria.where("age").is(70).and("licence").is(true));
```


### Query

https://www.mongodb.com/docs/manual/reference/operator/query/

Roughly,
* select <-> collection.find()
* group <-> collection.aggregate()

Perks
* js, so regex support
* 


### Data model / schema

![image](https://github.com/user-attachments/assets/b4d3fec6-5a80-44b0-9360-6432b1b5e9f2)


* https://www.mongodb.com/docs/manual/core/schema-validation/specify-json-schema/#steps
* https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/
* https://www.mongodb.com/docs/manual/reference/operator/query/jsonSchema/
* https://datatracker.ietf.org/doc/html/draft-zyp-json-schema-04


Create collection with schema:
```js
db.createCollection("students", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Student Object Validation",
         required: [ "address", "major", "name", "year" ],
         properties: {
            name: {
               bsonType: "string",
               description: "'name' must be a string and is required"
            },
            year: {
               bsonType: "int",
               minimum: 2017,
               maximum: 3017,
               description: "'year' must be an integer in [ 2017, 3017 ] and is required"
            },
            gpa: {
               bsonType: [ "double" ],
               description: "'gpa' must be a double if the field exists"
            }
         }
      }
   }
} )
```

#### Embedded Data Versus References

https://www.mongodb.com/docs/manual/data-modeling/concepts/embedding-vs-references/

Embedded - pros

* Better performance for read operations
* The ability to retrieve related data in a single database operation
* The ability to to update related data in a single atomic write operation

References - use cases

* Embedding would result in duplication of data but would not provide sufficient read performance advantages to outweigh the implications of the duplication. For example, when the embedded data frequently changes.
* You need to represent complex many-to-many relationships or large hierarchical data sets.
* The related entity is frequently queried on its own. For example, if you have employee and department data, you may consider embedding department information in the employee documents. However, if you often query for a list of departments, your application will perform best with a separate department collection that is linked to the employee collection with a reference.
