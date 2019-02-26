import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Home">
    <h2 className="title is-2">Authentication with Next.js using JWT and Redux</h2>
    <img src="/static/nextjs.jpg" />
    <p>
      A demonstrating app of Next.js application using JWT with Redux.
    </p>
  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);