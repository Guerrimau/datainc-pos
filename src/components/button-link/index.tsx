import { Button } from "@mui/joy";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
  to: string;
}

const ButtonLink = ({ children, to }: IProps) => {
  return (
    <Link href={to}>
      <Button
        color="neutral"
        variant="outlined"
        size="sm"
        sx={{ height: "fit-content" }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
