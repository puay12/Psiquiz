import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '../api/users';

export const Info = () => {
  const users = useTracker(() => {
    return UsersCollection.find().fetch();
  });

  return (
    <div>
      <h2>Learn Meteor!</h2>
    </div>
  );
};
