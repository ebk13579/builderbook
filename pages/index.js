import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import Header from '../components/HomeHeader';
import Footer from '../components/HomeFooter';

import {
  styleBigAvatar,
  styleRaisedButton,
  styleHomepageFeature,
  styleH1,
} from '../lib/SharedStyles';
import withLayout from '../lib/withLayout';
import withAuth from '../lib/withAuth';

const styleTeamMember = {
  textAlign: 'center',
  padding: '10px 5%',
};

const Index = ({ user }) => (
  <div>
    <Head>
      <title>Open source (MIT License) web app to publish documentation and books</title>
      <meta
        name="description"
        content="Open source web app built with modern JavaScript stack: React, Material UI, Next, Express, Mongoose, and MongoDB. Integrated with AWS SES, Github, Google OAuth, Stripe, and MailChimp."
      />
    </Head>
    <Header user={user} />
  </div>
);

Index.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
};

Index.defaultProps = {
  user: null,
};

export default withAuth(withLayout(Index, { noHeader: true }), { loginRequired: false });
