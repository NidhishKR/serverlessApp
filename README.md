# serverlessApp


## 1. Clone this directory
## 2. Enter the following command in your terminal.
 ### aws s3 mb s3://bucket-name --region region
 ### aws cloudformation package \
        --template-file example.yaml \
        --output-template-file serverless-output.yaml \
        --s3-bucket s3-bucket-name
 ### aws cloudformation deploy \
        --template-file serverless-output.yaml \
        --stack-name new-stack-name \
        --capabilities CAPABILITY_IAM