

1. guide


cdk - cli to connect to cloud

to be categ
* cli


feeling
* too many products.. names
* build and push materials to corresponding amazon service/product using cli etc, like Lightsail, Amplify(?), with configs (resources, target env, etc.)

terms
* EC2 - Elastic Compute Cloud
* S3 - Simple Storage Service

### compute
https://aws.amazon.com/getting-started/guides/deploy-webapp-decision/

* 1 - just code
    * asdf
        * asdfa
    * safd
    * asdf
* 2 - with containers
    * Lightsail
    * ECS
    * EKS
* 3 - on VM
    * Lightsail
    * EC2

### storage
https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html

Amazon Simple Storage Service (Amazon S3)

#### Concepts
* Bucket - container to storage S3 Objects
* Object - entities stored in Amazon S3. consist of object data and metadata (name-value, e.g. HTTP meta `Content-Type`)
* Key - id within Bucket, "bucket + key + version"

#### Dev 
*to be updated depending on work*

request using SDK with AWS account \
https://docs.aws.amazon.com/AmazonS3/latest/userguide/AuthUsingAcctOrUserCredentials.html

auth - like ssh, credentials saved in local `~/.aws` dir

other content like cli, REST, see directory: \
![image](https://user-images.githubusercontent.com/5567035/149057331-64c4c632-655c-4292-bcd7-b0eca54d34de.png)

