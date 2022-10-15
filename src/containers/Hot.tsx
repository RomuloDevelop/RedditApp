import React from 'react';
import {Listing} from '../components/Listing';
import {POST_CATEGORY} from '../config/constants';

export const Hot = () => <Listing category={POST_CATEGORY.HOT} />;
