interface BaseRendererProps {
  title: string;
  description: string;
}

const BaseRenderer = ({ title, description }: BaseRendererProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl md:text-4xl text-marineBlue">{title}</h1>
      <p className="text-base text-coolGray font-medium md:font-regular">{description}</p>
    </div>
  );
};

export default BaseRenderer;
