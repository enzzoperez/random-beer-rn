import 'react-native';
import React from 'react';
import App from '../src/App';
import {render} from '@testing-library/react-native';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

it('renders correctly', async () => {});
