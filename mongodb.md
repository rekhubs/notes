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


View

* read-only

Standard Views vs. On-Demand Materialized Views

MongoDB provides two different view types: standard views and on-demand materialized views. Both view types return the results from an aggregation pipeline.
* Standard views are computed when you read the view, and are not stored to disk.
* On-demand materialized views are stored on and read from disk. They use a $merge or $out stage to update the saved data.
* Indexes - Standard views use the indexes of the underlying collection. As a result, you cannot create, drop or re-build indexes on a standard view directly, nor get a list of indexes on the view. You can create indexes directly on on-demand materialized views because they are stored on disk.
* Performance - On-demand materialized views provide better read performance than standard views because they are read from disk instead of computed as part of the query. This performance benefit increases based on the complexity of the pipeline and size of the data being aggregated.


Good example of join in official doc - https://www.mongodb.com/docs/manual/core/views/join-collections-with-view/

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
