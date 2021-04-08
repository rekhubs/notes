
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

