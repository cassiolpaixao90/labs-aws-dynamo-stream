import * as AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export interface DynamoDB {
	put(params): Promise<any>;
}

export class AdapterDynamoDB implements DynamoDB {
	async put(params) {
		return dynamoDB.put(params).promise();
	}
}
