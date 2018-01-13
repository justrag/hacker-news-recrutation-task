import React from 'react';
import { connect } from 'react-redux';
import { ProgressBar, Content } from 'react-mdl';
import {
  getAPIError,
  getStoriesArr,
  getLoaded,
  getLoadingProgress
} from '../selectors/';
import Story from './Story';

const APIError = () => (
  <Content>
    Sorry, cannot connect to HackerNews. Either you're offline or HackerNews is
    down.
  </Content>
);
const withAPIErrorHOC = Component => ({ apiError, ...rest }) =>
  apiError ? <APIError /> : <Component {...rest} />;

const LoadingProgress = ({ progress }) => (
  <Content>
    <ProgressBar progress={progress} />
  </Content>
);

const withLoadingProgressHOC = Component => ({ loaded, progress, ...rest }) =>
  loaded ? <Component {...rest} /> : <LoadingProgress progress={progress} />;

export const Stories = ({ stories }) => (
  <div>{stories.map(story => <Story key={story.id} {...story} />)}</div>
);

const mapStateToProps = state => ({
  apiError: getAPIError(state),
  loaded: getLoaded(state),
  progress: getLoadingProgress(state),
  stories: getStoriesArr(state)
});

export default connect(mapStateToProps)(
  withAPIErrorHOC(withLoadingProgressHOC(Stories))
);
