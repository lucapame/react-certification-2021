import React from 'react';
import { MAX_RESUTS_ON_SEARCH } from '../../../utils/constants';
import helper from '../../../utils/helpers';
import { Preloader, PlaceholderContainer } from './styled/styled-components';

const Loader = ({ isFlatCard }) => {
  return Array.from(Array(MAX_RESUTS_ON_SEARCH)).map((x, index) => (
    <Preloader
      flat={isFlatCard}
      className="col my-2"
      key={`item ${helper.generateUid()}`}
      data-testid="preloader-card"
    >
      <PlaceholderContainer
        flat={isFlatCard}
        style={{ animationDelay: `${index * (1 / 18)}s` }}
      />
    </Preloader>
  ));
};

export default Loader;
