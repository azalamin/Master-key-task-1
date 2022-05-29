import { Link, useMatch, useResolvedPath } from "react-router-dom";

function AdFormateCustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ background: match ? "#FF6F00" : "", color: match ? 'white' : ''}}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default AdFormateCustomLink;
