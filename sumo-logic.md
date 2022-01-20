
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




# collect

Field Extraction Rules (FERs) - fields parsed at ingestion time rather than query \
https://help.sumologic.com/Manage/Field-Extractions
