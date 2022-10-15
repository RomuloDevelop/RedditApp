import React from 'react';
import {Listing} from '../components/Listing';
import {POST_CATEGORY} from '../config/constants';

export const Controversial = () => (
  <Listing category={POST_CATEGORY.CONTROVERSIAL} />
);
