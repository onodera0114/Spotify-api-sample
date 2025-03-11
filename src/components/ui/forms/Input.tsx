import { TextField } from "@mui/material";

type Props = {
  id?: string;
  label: string;
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = (props: Props): JSX.Element => {
  const { id, label, variant = "outlined", fullWidth = true, onChange } = props;
  return (
    <TextField id={id} label={label} variant={variant} fullWidth={fullWidth} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
  );
};
