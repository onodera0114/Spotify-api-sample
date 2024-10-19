import { Button } from "@/components/ui/buttons/Button";
import { Link } from "@/components/ui/links/Link";
import { Card, Typography } from "@mui/material";

export type MenuItem = {
  icon?: React.ElementType;
  text: string;
  route: string;
};

type Props = {
  menuItem: MenuItem;
};

export const MenuListItems: React.FC<Props> = (props: Props) => {
  const { menuItem } = props;
  return (
    <>
      <Card>
        {menuItem.route ? (
          <Link to={menuItem.route} sx={{ display: "block", width: "100%" }}>
            <Button buttonProps={{ variant: "text", fullWidth: true, sx: { p: 2 } }}>
              {menuItem.icon && <menuItem.icon />}
              <Typography color="primary">{menuItem.text}</Typography>
            </Button>
          </Link>
        ) : (
          <Button buttonProps={{ variant: "text", disabled: true, fullWidth: true, sx: { p: 2 } }}>
            {menuItem.icon && <menuItem.icon />}
            <Typography color="inherit">{menuItem.text}</Typography>
          </Button>
        )}
      </Card>
    </>
  );
};
