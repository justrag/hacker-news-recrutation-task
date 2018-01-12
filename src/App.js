import React from 'react';
import { Layout, Header, Footer, FooterSection } from 'react-mdl';
import Modal from './Modal';
import Stories from './Stories';

const layoutStyle = {
	background: 'url(Atari-800xl.jpg) center / cover'
};
//pic from http://bestandworstever.blogspot.com/2012/12/best-atari-system-ever-800xl.html

const titleStyle = { color: '#ddd' };
const App = () => (
	<div>
		<Layout fixedHeader style={layoutStyle}>
			<Header title={<span style={titleStyle}>HackerNews</span>} />
			<Stories />
			<Modal />
			<Footer size="mini">
				<span>made by rag in 2018</span>
			</Footer>
		</Layout>
	</div>
);

export default App;
