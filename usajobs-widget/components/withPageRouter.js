import { useState, useEffect } from 'react'
import { withRouter } from 'next/router';

/**
 * Our router to override the missing query when deploying to static export
 * This is required for page components that need access to the router
   stolen from: https://github.com/zeit/next.js/issues/4804#issuecomment-451558569
 */
export const withPageRouter = (Component) => {
  return withRouter(({ router, ...props }) => {

    // split at first `?`
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

    const query = {};
    for (const [key, value] of searchParams) {
      query[key] = value;
    }

    // replace the empty query
    router.query = query;

    return (<Component {...props} router={router} />);
  });
};
