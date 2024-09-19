import { ButtonProps, Button as MUIButton } from "@mui/material";

type Props = {
  buttonProps?: ButtonProps;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = (props: Props) => {
  const { buttonProps, children } = props;
  return <MUIButton {...buttonProps}>{children}</MUIButton>;
};
