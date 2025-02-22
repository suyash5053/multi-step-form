import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="flex w-full justify-between items-end">
      <Button
        variant={"link"}
        type="submit"
        className="w-1/4 h-12 text-marineBlue hover:no-underline items-center justify-start p-0 font-medium"
      >
        Go Back
      </Button>
      <Button type="submit" className="w-1/4 h-12 bg-marineBlue hover:bg-marineBlue/85 rounded-lg">
        Next Step
      </Button>
    </div>
  );
};

export default Footer;
