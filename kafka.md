# 1. intro
https://kafka.apache.org/intro

concepts

* producer
* consumer
* event
    * Event key: "Alice"
    * Event value: "Made a payment of $200 to Bob"
    * Event timestamp: "Jun. 25, 2020 at 2:06 p.m."
* topic - similar to a folder in a filesystem, and the events are the files in that folder
    * always multi-producer and multi-subscriber
    * events are not deleted after consumption
    * retain settings per topic
* partition - a topic is spread over a number of "buckets" located on different Kafka brokers
* replica -  *to make your data fault-tolerant and highly-available*


![image](https://user-images.githubusercontent.com/5567035/149231125-5666f765-0129-471a-b7aa-eeee647a3ab7.png)


# 3. Design
https://kafka.apache.org/documentation/#design




