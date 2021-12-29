import { Meteor } from 'meteor/meteor';
import { useRecoilState } from 'recoil';
import { authenticated } from '../ui/store';
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
// const [auth, setAuth] = useRecoilState(authenticated);