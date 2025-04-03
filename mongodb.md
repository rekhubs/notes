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


* Pipeline
* Aggregation


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
