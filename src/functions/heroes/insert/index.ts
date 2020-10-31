import middy from '@middy/core';
import eventNormalizer from '@middy/http-event-normalizer';
import jsonBodyParser from '@middy/http-json-body-parser';
import { adapterErrorHandler, adapterHandler, adapterValidator } from '../../../libs/adapters';
import { makeHeroHandler, makeHeroSchema } from './factory';

export const handler = middy(adapterHandler(makeHeroHandler()))
	.use(eventNormalizer())
	.use(jsonBodyParser())
	.use(adapterValidator(makeHeroSchema()))
	.use(adapterErrorHandler());
