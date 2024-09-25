import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "@/components/ui/links/Link";

export type BreadcrumbItem = {
  text: string;
  path?: string;
};

type Props = {
  breadcrumbItem: BreadcrumbItem[];
};

export const Breadcrumbs: React.FC<Props> = (props: Props) => {
  const { breadcrumbItem } = props;

  return (
    <MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {breadcrumbItem.map((item) =>
        item.path ? (
          <Link key={item.path ?? ""} underline="hover" to={item.path}>
            {item.text}
          </Link>
        ) : (
          <Typography key={item.path ?? ""}>{item.text}</Typography>
        )
      )}
    </MUIBreadcrumbs>
  );
};
