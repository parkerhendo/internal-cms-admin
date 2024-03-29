import React from 'react'
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { NavItem } from '../src/elements';

storiesOf('NavItem', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
    <NavItem to="faq" title="FAQ">
      <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M11.5,19 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S12.328,19,11.5,19z M15.811,10.127 c-0.309,0.495-0.896,1.051-1.762,1.669c-1.401,1.036-1.363,1.266-1.363,2.204h-2.457c0-0.733-0.016-1.296,0.38-1.981 c0.253-0.439,0.717-0.906,1.391-1.4c0.809-0.578,1.595-1.135,1.595-2.105c0-0.909-0.778-1.233-1.687-1.233 c-0.927,0-1.984,0.303-3.171,0.909l-1.011-2.03c2.157-1.209,5.561-1.756,7.422-0.241C16.514,7.032,16.522,8.989,15.811,10.127z">
      </path>
    </NavItem>
  ))