

## quick service info check
e.g. cat api, plugins
## data interaction



### search substring contains special characters 
e.g. search for documents whose particular field contains `333/KK`. a match can be `XXAA/22333/KKLLL`.


1. mapping the field: `keyword` tokenizer + `lowercase` filter

```json
{
  "type": "custom",
  "tokenizer": "keyword",
  "filter": ["lowercase"]
}
```

2. mapping the filed as `text` type
3. when searching, lowercase the input (at client) -> wildcard query
```java
import org.elasticsearch.index.query.QueryBuilders;

QueryBuilders.wildcardQuery("number", "*333/KK*".toLowerCase());
```

