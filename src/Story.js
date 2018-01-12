import React from 'react';
import { connect } from 'react-redux';
import {
  Badge,
  Icon,
  IconButton,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu
} from 'react-mdl';
import { chooseStory, showModal } from './actions';
import { getChosenStory } from './selectors';

const localDateTime = unixtime => {
  const newDate = new Date(1000 * unixtime);
  return newDate.toDateString() + ' ' + newDate.toTimeString();
};

const domainFromUrl = url => {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  return link.hostname;
};

const cardStyle = {
  width: '95%',
  margin: 'auto',
  marginBottom: '10px',
  minHeight: '1px'
};
const cardMenuStyle = { color: '#795548' };
export const Story = ({
  id,
  title,
  by,
  score,
  time,
  descendants,
  url,
  chooseStory,
  showModal,
  chosen
}) =>
  id === chosen ? (
    <Card shadow={3} style={cardStyle}>
      <CardTitle>{title}</CardTitle>
      <CardText>
        <Badge text={score} overlap>
          <Icon name="favorite" />
        </Badge>
        <Badge text={descendants} overlap>
          <Icon name="comment" />
        </Badge>
        <Icon name="person" /> {by} <Icon name="date_range" />{' '}
        {localDateTime(time)}
      </CardText>
      <CardActions border>
        <Button onClick={() => showModal(url)} colored>
          {domainFromUrl(url)}
        </Button>
      </CardActions>
    </Card>
  ) : (
    <Card shadow={1} style={cardStyle}>
      <CardText>{title}</CardText>
      <CardMenu style={cardMenuStyle}>
        <IconButton name="arrow_back" onClick={() => chooseStory(id)} />
      </CardMenu>
    </Card>
  );

const mapStateToProps = state => ({
  chosen: getChosenStory(state)
});

export default connect(mapStateToProps, { chooseStory, showModal })(Story);
