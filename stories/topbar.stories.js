import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { TopBar } from '../src/components';

storiesOf('TopBar', module)
  .addDecorator(StoryRouter())
  .add('Default', () => <TopBar />)