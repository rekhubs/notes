
# search

basics \
https://help.sumologic.com/05Search/Get-Started-with-Search


In the Search tab, a search query is typically formatted something like this:
```
keyword search | parse | where | group-by | sort | limit
```
e.g.
```
_sourcecategory=apache | parse "* --" as src_ip | count by src_ip | sort _count
```
![image](https://user-images.githubusercontent.com/5567035/150270831-e69d2b72-f60d-4a3a-971e-8b2ba0d37ae9.png)

## keyword

Syntax
```
_sourceCategory="sales_services_g1" keyword *keyword* OR keyword NOT keyword
```
## Search Syntax
Parse fields out:
* `* | parse regex "(?<src_IP>\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})"`
* `_sourceCategory=apache | parse "* " as src_IP`
* `_sourcehost=vpn3000 | parse "Group  [*] User [*]" as type, user`

## Search Query Language
*specs, some detailed, json, lookup, save* \
https://help.sumologic.com/05Search/Search-Query-Language

## Lookup Tables
*? to be estimated and read* \
https://help.sumologic.com/05Search/Lookup_Tables

## others
* best practices - https://help.sumologic.com/05Search/Get-Started-with-Search/How-to-Build-a-Search/Best-Practices%3A-Search-Rules-to-Live-By
* cheatsheet - https://help.sumologic.com/05Search/Search-Cheat-Sheets/General-Search-Examples-Cheat-Sheet
* LogReduce - algorithm uses fuzzy logic to cluster messages together based on string and pattern similarity


# collect

Field Extraction Rules (FERs) - fields parsed at ingestion time rather than query \
https://help.sumologic.com/Manage/Field-Extractions
