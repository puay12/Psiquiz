import React from 'react';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  render(<RecoilRoot><App/></RecoilRoot>, document.getElementById('react-target'));
});
