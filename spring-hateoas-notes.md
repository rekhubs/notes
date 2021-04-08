
todo - create Spring folder or main note and move \
https://docs.spring.io/spring-hateoas/docs/current/reference/html/#reference

### 1. 

HATEOAS wiki - https://en.wikipedia.org/wiki/HATEOAS \
link relations (IANA) - https://www.iana.org/assignments/link-relations/link-relations.xhtml

```java
new PersonModel("Dave", "Matthews").add(Link.of("https://myhost/people/42"));
```
generates HAL representation (`application/hal+json`):
```json
{
  "_links" : {
    "self" : {
      "href" : "https://myhost/people/42"
    }
  },
  "firstname" : "Dave",
  "lastname" : "Matthews"
}
```

### 2. Building links with Spring HATOEAS

#### xx
#### Representation model assembler
Extend Spring HATEOAS' `RepresentationModelAssemblerSupport` to 
* Instantiation of the model class
* Adding a link with a rel of self pointing to the resource that gets rendered

```java
class PersonModelAssembler extends RepresentationModelAssemblerSupport<Person, PersonModel> {

  public PersonModelAssembler() {
    super(PersonController.class, PersonModel.class);
  }

  @Override
  public PersonModel toModel(Person person) {

    PersonModel resource = createResource(person);
    // … do further mapping
    return resource;
  }
}
```
