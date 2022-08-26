

#### getting started
https://grafana.com/docs/loki/latest/logql/

* Comment - `#`


#### show as in old log tools - Logstash / sumo

* way of formatting
* line format 
* template / expression, pipes and funcs, e.g. `{{.payload | trunc 200}}`, `{{regexReplaceAll "{\".*" .payload "___json___"}}`

--
* G
