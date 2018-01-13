import React from 'react';
import { connect } from 'react-redux';
import { IconButton, Content } from 'react-mdl';
import { getModalHref } from '../selectors/';
import { hideModal } from '../actions/';

const modalStyle = {
  position: 'fixed',
  backgroundColor: '#795548',
  zIndex: 1,
  left: '2%',
  top: '10%',
  width: '95%',
  height: '90%',
  //  overflow: 'auto',
  border: 'thin solid darkgrey'
};
const modalContentStyle = {
  backgroundColor: '#fefefe',
  margin: '15px auto',
  padding: '10px',
  border: '1px solid #888',
  width: '90%',
  height: '90%',
  display: 'block'
};

const closeButtonStyle = {
  float: 'right'
};

export const Modal = ({ href, hideModal }) =>
  href && (
    <Content style={modalStyle}>
      <IconButton
        style={closeButtonStyle}
        onClick={hideModal}
        name="close"
        colored
      />
      <iframe style={modalContentStyle} src={href} />
    </Content>
  );

const mapStateToProps = state => ({ href: getModalHref(state) });

export default connect(mapStateToProps, { hideModal })(Modal);
