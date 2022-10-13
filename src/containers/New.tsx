import React from 'react';
import {Listing} from '../components/Listing';
import {POST_CATEGORY} from '../config';

export const News = () => <Listing category={POST_CATEGORY.NEW} />;
