import { TextField } from "@mui/material";

type Props = {
  label: string;
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
};

export const Input: React.FC<Props> = (props: Props): JSX.Element => {
  const { label, variant = "outlined", fullWidth = true } = props;
  return <TextField label={label} variant={variant} fullWidth={fullWidth} />;
};
