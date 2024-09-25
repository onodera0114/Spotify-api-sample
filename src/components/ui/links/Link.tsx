import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

type Props = MUILinkProps &
  RouterLinkProps & {
    children: React.ReactNode;
  };

export const Link: React.FC<Props> = (props: Props): JSX.Element => {
  const { children, ...rest } = props;
  return (
    <MUILink component={RouterLink} {...rest}>
      {children}
    </MUILink>
  );
};
