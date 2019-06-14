import { withRouter } from 'next/router';

/**
 * Our router to override the missing query when deploying to static export
 * This is required for page components that need access to the router
 */


const delay = (t, v) => {
  return new Promise(function(resolve) { 
    setTimeout(resolve.bind(null, v), t)
});

}
export const withPageRouter = (Component) => {
    return withRouter(({ router, ...props }) => {
        // split at first `?`
        const query = {};
        delay(1000).then(() => {
            const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
            for (const [key, value] of searchParams) {
              query[key] = value;
            }
            router.query = query
            //#region router.query = query;
          }
          )
          return (<Component {...props} router={router} />);
    });
};