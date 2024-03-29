import React from 'react'
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import {SideBar} from '../src/components';

storiesOf('SideBar', module)
  .addDecorator(StoryRouter())
  .add('Default', () => <SideBar />)