import { TextField } from "@mui/material";

type Props = {
  label: string;
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = (props: Props): JSX.Element => {
  const { label, variant = "outlined", fullWidth = true, onChange } = props;
  return <TextField label={label} variant={variant} fullWidth={fullWidth} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />;
};
